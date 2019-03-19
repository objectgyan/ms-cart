import { Component, OnInit, OnDestroy } from "@angular/core";
import { NotificationService } from "./notification.service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})

export class NotificationComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  message = "";
  isVisible = false;
  alerts: AlertMessage[] = [];

  constructor(private notificationService: NotificationService) {}
  
  ngOnInit() {
    this.subscription = this.notificationService.alertNotification$.subscribe(c => this.setMessage(c));
  }

  setMessage(msg: string){
    this.alerts.push(new AlertMessage("success", msg, "2000"));
    this.isVisible = true;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

export class AlertMessage {
  constructor(public type: string, public message: string, public timeout: string) {

  }
}

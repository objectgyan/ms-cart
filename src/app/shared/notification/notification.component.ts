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
  alerts: any[] = [];

  constructor(private notificationService: NotificationService) {}
  
  ngOnInit() {
    this.subscription = this.notificationService.alertNotification$.subscribe(c => this.setMessage(c));
  }

  setMessage(msg: string){
    this.alerts.push({type:"success", msg: msg, timeout:"2000"});
    //this.alerts[0].msg = msg;
    this.isVisible = true;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
import { Component, OnInit } from "@angular/core";
import { NotificationService } from "./notification.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    //notificationService.

    this.notificationService.mySubscription.subscribe(params => {});

  }
}

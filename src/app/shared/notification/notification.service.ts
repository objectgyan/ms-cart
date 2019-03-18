import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor() {}

  private alertnotificationMessage = new Subject<string>();

  alertNotification$ = this.alertnotificationMessage.asObservable();

  notifyMessage(message: string) {
    this.alertnotificationMessage.next(message);
  }
}

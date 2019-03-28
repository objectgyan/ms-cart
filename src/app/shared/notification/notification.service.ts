import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  private alertnotificationMessage = new Subject<string>();

  alertNotification$ = this.alertnotificationMessage.asObservable();

  notifyMessage(message: string) {
    // this.alertnotificationMessage.next(message);
    this.toastr.info(message, "", {
      timeOut: 3000,
      progressBar: true,
      closeButton: true
    });
  }
}

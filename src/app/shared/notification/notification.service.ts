import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor() {}

  mySubscription: Observable<any>;

}

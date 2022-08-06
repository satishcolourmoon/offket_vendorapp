import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalEventsService {

  private eventObject = new Subject<any>();

  constructor() { }

    publishEventData(data: any) {
       this.eventObject.next(data);
    }

    getObservable(): Subject<any> {
        return this.eventObject;
    }
}

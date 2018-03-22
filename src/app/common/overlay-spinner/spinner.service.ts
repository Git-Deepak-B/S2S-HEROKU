import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SpinnerService {

  spinnerState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  show() {
    this.spinnerState.next(true);
  }

  hide() {
    this.spinnerState.next(false);
  }

  getSpinnerState(): Observable<boolean> {
    return this.spinnerState.asObservable();
  }
}

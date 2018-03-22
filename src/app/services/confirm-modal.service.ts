import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ConfirmModalService {
  private unsavedFormModalSubject = new Subject<boolean>();
  private unsavedFormModal;

  setModal(unsavedFormModal) {
    this.unsavedFormModal = unsavedFormModal;
  }

  confirm(): Observable<boolean> {
    this.unsavedFormModal.show();
    return this.unsavedFormModalSubject.asObservable();
  }

  onUserResponse(forceExit: boolean) {
    this.unsavedFormModal.hide();
    this.unsavedFormModalSubject.next(forceExit);
  }
}

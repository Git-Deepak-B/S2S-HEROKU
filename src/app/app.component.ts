import {Component, OnInit, ViewChild} from '@angular/core';
import {UserStoreService} from './stores/user-store.service';
import {ModalDirective} from 'angular-bootstrap-md/modals/modal.directive';
import {Subject} from 'rxjs/Subject';
import {ConfirmModalService} from './services/confirm-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'S2S Portal';
  @ViewChild('unsavedFormModal') unsavedFormModal: ModalDirective;

  constructor(private _userStore: UserStoreService,
              private _confirmModal: ConfirmModalService) {
  }

  ngOnInit() {
    // this._userStore.setUser(MockUsers.users[0]);
    this._confirmModal.setModal(this.unsavedFormModal);
  }

  onUserResponse(forceExit) {
    this._confirmModal.onUserResponse(forceExit);
  }
}

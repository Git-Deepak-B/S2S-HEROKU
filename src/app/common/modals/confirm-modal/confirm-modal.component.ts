import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md/modals/modal.directive';
import {ConfirmModalService} from './confirm-modal.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @ViewChild('unsavedFormModal') unsavedFormModal: ModalDirective;

  constructor(private _confirmModal: ConfirmModalService) {
  }


  ngOnInit() {
    this._confirmModal.setModal(this.unsavedFormModal);
  }

  onUserResponse(forceExit) {
    this._confirmModal.onUserResponse(forceExit);
  }

}

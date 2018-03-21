import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md/modals/modal.directive';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {EditCustomerDataService} from '../../services/edit-customer-data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @ViewChild('resetPasswordSuccessModal') public resetPasswordSuccessModal: ModalDirective;
  @ViewChild('updateCustomerModal') public updateCustomerModal: ModalDirective;
  resetPasswordCustomer;
  updateCustomer;
  updateCustomerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  });

  constructor(private _userService: UserService,
              private _editCustomerService: EditCustomerDataService) {
  }

  ngOnInit() {
    this._editCustomerService.resetPasswordCustomer.subscribe(customer => {
      this.resetPasswordCustomer = customer;
      this.onResetPassword();
    });
    this._editCustomerService.updateCustomer.subscribe(customer => {
      this.updateCustomer = customer;
      this.updateCustomerForm.patchValue(customer);
      this.updateCustomerModal.show();
    });
  }

  get username() {
    return this.updateCustomerForm.get('username');
  }

  get company() {
    return this.updateCustomerForm.get('company');
  }

  get firstName() {
    return this.updateCustomerForm.get('firstName');
  }

  get lastName() {
    return this.updateCustomerForm.get('lastName');
  }

  get email() {
    return this.updateCustomerForm.get('email');
  }

  onUpdateCustomer(updateCustomerForm) {
    console.log(updateCustomerForm);
    // TODO call API to update customer here...
    this.updateCustomerModal.hide();
  }

  onResetPassword() {
    this._userService.sendForgotPwdEmail(this.resetPasswordCustomer.email).subscribe(data =>
      this.resetPasswordCustomer.email && data.posted ? this.resetPasswordSuccessModal.show() :
        console.log('An Error Occurred in triggering forgot password email!!' + this.resetPasswordCustomer.email));
  }
}

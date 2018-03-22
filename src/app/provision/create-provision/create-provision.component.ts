import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GlobalValidator} from '../../common/validator/GlobalValidator';
import {User} from '../../common/types/User';
import {UserStoreService} from '../../stores/user-store.service';
import {Router} from '@angular/router';
import {ConfirmModalService} from '../../services/confirm-modal.service';

@Component({
  selector: 'app-create-provision',
  templateUrl: './create-provision.component.html',
  styleUrls: ['./create-provision.component.scss']
})
export class CreateProvisionComponent implements OnInit {
  isCustomer;
  user: User;

  createProvisionForm = new FormGroup({
    company: new FormControl(this.isCustomer ? this.user.company : '', [Validators.required]),
    email: new FormControl(this.isCustomer ? this.user.email : '', [GlobalValidator.emailFormat]),
    siteId: new FormControl('', [Validators.required]),
    locationPhone: new FormControl('', [Validators.required]),
    siteContact: new FormControl('', []),
    siteContactPhone: new FormControl('', []),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl('', []),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    country: new FormControl('USA', [Validators.required]),
    createdBy: new FormControl(this.user && this.user.username, [Validators.required]),
    circuitPurpose: new FormControl('', [Validators.required]),
    comments: new FormControl('', [])
  });

  constructor(private _userStore: UserStoreService,
              private _router: Router,
              private _confirmModal: ConfirmModalService) {
  }

  ngOnInit() {
    this._userStore.getUser().subscribe(user => {
      this.user = user;
      this.isCustomer = user.role === 'customer';
      // pre-populate company and email for customers
      if (this.isCustomer) {
        this.createProvisionForm.patchValue(user);
      }
    });
  }

  get company() {
    return this.createProvisionForm.get('company');
  }

  get email() {
    return this.createProvisionForm.get('email');
  }

  get siteId() {
    return this.createProvisionForm.get('siteId');
  }

  get locationPhone() {
    return this.createProvisionForm.get('locationPhone');
  }

  get siteContact() {
    return this.createProvisionForm.get('siteContact');
  }

  get siteContactPhone() {
    return this.createProvisionForm.get('siteContactPhone');
  }

  get addressLine1() {
    return this.createProvisionForm.get('addressLine1');
  }

  get addressLine2() {
    return this.createProvisionForm.get('addressLine2');
  }

  get city() {
    return this.createProvisionForm.get('city');
  }

  get state() {
    return this.createProvisionForm.get('state');
  }

  get zipCode() {
    return this.createProvisionForm.get('zipCode');
  }

  get country() {
    return this.createProvisionForm.get('country');
  }

  get createdBy() {
    return this.createProvisionForm.get('createdBy');
  }

  get circuitPurpose() {
    return this.createProvisionForm.get('circuitPurpose');
  }

  get comments() {
    return this.createProvisionForm.get('comments');
  }

  createProvision(provisionForm) {
    console.log(JSON.stringify(provisionForm));
  }

  // Used in CanDeactivateGuardService
  canDeactivate() {
    console.log('i am navigating away');

    if (this.createProvisionForm.dirty) {
      return this._confirmModal.confirm();
    }

    return true;
  }
}

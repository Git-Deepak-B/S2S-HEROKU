import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProvisionService} from '../../services/provision.service';
import {Location} from '@angular/common';
import {UserStoreService} from '../../stores/user-store.service';
import {User} from '../../common/types/User';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ConfirmModalService} from '../../services/confirm-modal.service';

@Component({
  selector: 'app-provision-detail',
  templateUrl: './provision-detail.component.html',
  styleUrls: ['./provision-detail.component.scss']
})
export class ProvisionDetailComponent implements OnInit {
  isAdmin;
  user: User;
  provision;

  provisionForm = new FormGroup({
    company: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    siteId: new FormControl('', [Validators.required]),
    locationPhone: new FormControl('', []),
    siteContact: new FormControl('', []),
    siteContactPhone: new FormControl('', []),
    createdBy: new FormControl('', [Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl('', []),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    circuitPurpose: new FormControl('', [Validators.required]),
    dateCreated: new FormControl('', [Validators.required]),
    dateModified: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    comments: new FormControl('', []),
    quoteProvidedDate: new FormControl('', []),
    orderReceivedDate: new FormControl('', []),
    orderPlacedDate: new FormControl('', []),
    circuitInstalledDate: new FormControl('', []),
    workLogInfo: new FormControl('', [])
  });


  constructor(private _routes: ActivatedRoute,
              private _router: Router,
              private _provisionService: ProvisionService,
              private _location: Location,
              private _userStore: UserStoreService,
              private _confirmModal: ConfirmModalService) {

  }

  ngOnInit() {
    this.user = this._userStore.getUserValue();
    this.isAdmin = this.user.role === 'admin';
    this._routes.paramMap.subscribe(params => {
      const provisionId = params.get('id');
      this._provisionService.getProvision(provisionId).subscribe(provision => {
        this.provision = provision;
        this.provisionForm.patchValue({
          company: this.provision.company,
          createdBy: this.provision.createdBy,
          email: this.provision.email,
          siteId: this.provision.siteId,
          locationPhone: this.provision.locationPhone,
          siteContact: this.provision.siteContact,
          siteContactPhone: this.provision.siteContactPhone,
          addressLine1: this.provision.location.addressLine1,
          addressLine2: this.provision.location.addressLine2,
          city: this.provision.location.city,
          state: this.provision.location.state,
          zipCode: this.provision.location.zipCode,
          country: this.provision.location.country,
          circuitPurpose: this.provision.circuitPurpose,
          dateCreated: this.provision.dateCreated,
          dateModified: this.provision.dateModified,
          status: this.provision.status,
          comments: this.provision.comments,
          quoteProvidedDate: this.provision.quoteProvidedDate,
          orderReceivedDate: this.provision.orderReceivedDate,
          orderPlacedDate: this.provision.orderPlacedDate,
          circuitInstalledDate: this.provision.circuitInstalledDate,
          workLogInfo: this.provision.workLogInfo
        });
      });
    });
  }

  get quoteProvidedDate() {
    return this.provisionForm.get('quoteProvidedDate');
  }

  get orderReceivedDate() {
    return this.provisionForm.get('orderReceivedDate');
  }

  get orderPlacedDate() {
    return this.provisionForm.get('orderPlacedDate');
  }

  get circuitInstalledDate() {
    return this.provisionForm.get('circuitInstalledDate');
  }

  get company() {
    return this.provisionForm.get('company');
  }

  get createdBy() {
    return this.provisionForm.get('createdBy');
  }

  get email() {
    return this.provisionForm.get('email');
  }

  get siteId() {
    return this.provisionForm.get('siteId');
  }

  get locationPhone() {
    return this.provisionForm.get('locationPhone');
  }

  get siteContact() {
    return this.provisionForm.get('siteContact');
  }

  get siteContactPhone() {
    return this.provisionForm.get('siteContactPhone');
  }

  get addressLine1() {
    return this.provisionForm.get('addressLine1');
  }

  get addressLine2() {
    return this.provisionForm.get('addressLine2');
  }

  get city() {
    return this.provisionForm.get('city');
  }

  get state() {
    return this.state.get('state');
  }

  get country() {
    return this.provisionForm.get('country');
  }

  get zipCode() {
    return this.provisionForm.get('zipCode');
  }

  get circuitPurpose() {
    return this.provisionForm.get('circuitPurpose');
  }

  get status() {
    return this.provisionForm.get('status');
  }

  updateProvision(form) {
    // TODO date fields are not pulling the actual values
    console.log(form);
    console.log(JSON.stringify(form));
  }

  goBack() {
    this._location.back();
  }

  // Used in CanDeactivateGuardService
  canDeactivate() {
    return this.provisionForm.dirty ? this._confirmModal.confirm() : true;
  }
}

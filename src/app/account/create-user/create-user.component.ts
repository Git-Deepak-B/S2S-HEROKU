import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {UserStoreService} from '../../stores/user-store.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GlobalValidator} from '../../common/validator/GlobalValidator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  defaultType = 'customer';
  defaultCompany = 's2s';
  createUserForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
    email: new FormControl('', [Validators.required, GlobalValidator.emailFormat]),
    type: new FormControl('', [Validators.required]),
    company: new FormControl()
  });

  constructor(private _accountService: UserService,
              private _userStore: UserStoreService,
              private _router: Router) {
  }

  ngOnInit() {
  }

  addUser(userInfo) {
    console.log(JSON.stringify(userInfo));
    this._accountService.addUser(userInfo).subscribe((response: any) => {
      if (response && response.type) {
        if (this._userStore.getUserValue()) {
          this._router.navigate(['/customers']);
        } else {
          this._router.navigate(['/login']);
        }
      } else {
        this.createUserForm.setErrors({isValid: false, message: 'Error in adding the user. Please try again.'});
      }
    }, (error) => {
      this.createUserForm.setErrors({isValid: false, message: error});
    });
  }

  get firstName() {
    return this.createUserForm.get('firstName');
  }

  get lastName() {
    return this.createUserForm.get('lastName');
  }

  get email() {
    return this.createUserForm.get('email');
  }

  get type() {
    return this.createUserForm.get('type');
  }

  get company() {
    return this.createUserForm.get('company');
  }

}

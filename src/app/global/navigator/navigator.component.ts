import {Component, OnInit} from '@angular/core';
import {NAVITEMS} from '../../../assets/data/nav-items';
import {User} from '../../common/types/User';
import {UserStoreService} from '../../stores/user-store.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})

export class NavigatorComponent implements OnInit {
  navItems = NAVITEMS;
  user: User;
  updateUserForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(private _userStore: UserStoreService) {
  }

  ngOnInit() {
    this._userStore.getUser().subscribe(user => this.user = user);
  }

  updateUser(updateUserForm) {
    console.log(JSON.stringify(updateUserForm));
    // TODO call api to update user here...
    // TODO check why only updated fields are being populated here...
  }

}

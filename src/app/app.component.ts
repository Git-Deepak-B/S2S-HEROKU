import {Component, OnInit} from '@angular/core';
import {UserStoreService} from './stores/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'S2S Portal';

  constructor(private _userStore: UserStoreService,) {
  }

  ngOnInit() {
    // this._userStore.setUser(MockUsers.users[0]);
  }

}

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {User} from '../common/types/User';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserStoreService {

  private _userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor() {
  }

  getUser(): Observable<User> {
    return this._userSubject.asObservable();
  }

  setUser(user: User) {
    this._userSubject.next(user);
  }

  removeCurrentUser() {
    this._userSubject.next(null);
  }

  getUserValue(): User {
    return this._userSubject.getValue();
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from '../common/types/User';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StorageService } from '../services/storage.service';
import { StorageKey } from '../common/constants/storage-constants';

@Injectable()
export class UserStoreService {

  private _userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private _storage: StorageService) {
  }

  getUser(): Observable<User> {
    return this._userSubject.asObservable();
  }

  setUser(user: User) {
    this._userSubject.next(user);
    this._storage.add(StorageKey.USER, JSON.stringify(user));
  }

  removeCurrentUser() {
    this._storage.remove(StorageKey.USER);
    this._userSubject.next(null);
  }

  getUserValue(): User {
    return this._userSubject.getValue();
  }
}

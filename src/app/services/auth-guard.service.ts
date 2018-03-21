import { Injectable } from '@angular/core';
import { UserStoreService } from '../stores/user-store.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from './authorization.service';
import { User } from '../common/types/User';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _userStore: UserStoreService,
    private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const roles = route.data['roles'] as Array<string>;
    const user: User = this._userStore.getUserValue();
    console.log('checking guard:::::::::::::::::::::::::::');
    console.log(user);
    if (user && user.role && roles.indexOf(user.role.toLowerCase()) > -1 && user.token) {
      console.log('checking guard::: 111');
      return true;
    }
    console.log('checking guard:::222');
    this._router.navigate(['/login']);
    return false;
  }

}

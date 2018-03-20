import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginForm} from '../../common/types/LoginForm';
import {AuthorizationService} from '../../services/authorization.service';
import {ServiceResponse} from '../../common/types/ServiceResponse';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {ModalDirective} from 'angular-bootstrap-md/modals/modal.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('forgotPasswordModal') public forgotPasswordModal: ModalDirective;
  @ViewChild('forgotPasswordSuccessModal') public forgotPasswordSuccessModal: ModalDirective;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+[0-9]*$')]),
    password: new FormControl('', Validators.required)
  });
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required])
  });
  forgotPasswordEmail;

  constructor(private _authService: AuthorizationService,
              private _userService: UserService,
              private _router: Router) {
  }

  ngOnInit() {
    this._authService.logout();
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  signIn(credentials: LoginForm) {
    console.log(credentials.username);
    console.log(credentials.password);
    this._authService.loginUser(credentials).subscribe((resp: ServiceResponse) => {
      if (resp.status) {
        this._router.navigate(['dash']);
      } else {
        this.setLoginError(resp.error);
      }
    }, errResp => this.setLoginError(errResp.error));
  }

  setLoginError(error: String): void {
    this.loginForm.setErrors({isValid: false, message: error});
  }

  resetPassword(forgotPasswordForm) {
    console.log(forgotPasswordForm);
    this.forgotPasswordEmail = forgotPasswordForm.email;
    this._userService.sendForgotPwdEmail(forgotPasswordForm.email).subscribe(data =>
      forgotPasswordForm.email && data.posted ? this.onResetPasswordSuccess() :
        this.onResetPasswordFailed(forgotPasswordForm));
  }

  onResetPasswordSuccess() {
    this.forgotPasswordModal.hide();
    this.forgotPasswordSuccessModal.show();
  }

  onResetPasswordFailed(forgotPasswordForm) {
    console.log('An Error Occurred in triggering forgot password email!!' + forgotPasswordForm);
    this.forgotPasswordModal.hide();
  }
}

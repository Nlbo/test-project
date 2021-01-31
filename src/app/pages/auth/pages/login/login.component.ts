import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {loginAction, loginSuccessAction} from '../../store/actions/auth-login.actions';
import {Observable} from 'rxjs';
import {isLoginingSelector, isRegisteringSelector} from '@pages/auth/store/selectors/auth-login.selectors';
import {Actions, ofType} from '@ngrx/effects';
import {registerSuccessAction} from '@pages/auth/store/actions/auth-register.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  isLogining$: Observable<boolean>;
  isRegistering: Observable<boolean>;
  userName = new FormControl('', [Validators.required]);

  constructor(private store: Store, private actionSubject: Actions, private router: Router) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  login() {
    if (this.userName.valid) {
      this.userName.setValue(this.userName.value.trim());
      this.store.dispatch(loginAction({request: {name: this.userName.value.toLowerCase()}}));
    }
  }

  initializeValues(): void {
    this.isLogining$ = this.store.pipe(select(isLoginingSelector));
    this.isRegistering = this.store.pipe(select(isRegisteringSelector));
    this.actionSubject.pipe(ofType(loginSuccessAction)).subscribe(({response}) => {
      localStorage.setItem('userId', JSON.stringify(response.id));
      this.router.navigate(['cats']);
    });
    this.actionSubject.pipe(ofType(registerSuccessAction)).subscribe(({response}) => {
      localStorage.setItem('userId', JSON.stringify(response.id));
      this.router.navigate(['cats']);
    });
  }
}

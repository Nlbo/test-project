import {Injectable} from '@angular/core';
import {AuthService} from '@api/auth/auth.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {loginAction, loginFailureAction, loginSuccessAction} from '../actions/auth-login.actions';
import {IUserModel} from '@api/auth/res/user.interface';
import {Router} from '@angular/router';
import {registerAction} from '@pages/auth/store/actions/auth-register.actions';

@Injectable({
  providedIn: 'root'
})

export class AuthLoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.getUser(request.name).pipe(
          map((response: IUserModel[]) => {
            if (response.length) {
              return loginSuccessAction({response: response[0]});
            } else {
              return registerAction({request});
            }
          }),
          catchError(({errorResponse}) => {
            return of(loginFailureAction(errorResponse));
          })
        );
      })
    ));


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {
  }
}

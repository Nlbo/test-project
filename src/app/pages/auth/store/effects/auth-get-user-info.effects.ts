import {Injectable} from '@angular/core';
import {AuthService} from '@api/auth/auth.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {IUserModel} from '@api/auth/res/user.interface';
import {Router} from '@angular/router';
import {
  getUserInfoAction,
  getUserInfoFailureAction,
  getUserInfoSuccessAction
} from '@pages/auth/store/actions/auth-get-user-info.actions';

@Injectable({
  providedIn: 'root'
})

export class AuthGetUserInfoEffects {
  getUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserInfoAction),
      switchMap(({id}) => {
        return this.authService.getUserInfo(id).pipe(
          map((response: IUserModel[]) => {
            return getUserInfoSuccessAction({response: response[0]});
          }),
          catchError(({errorResponse}) => {
            return of(getUserInfoFailureAction(errorResponse));
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

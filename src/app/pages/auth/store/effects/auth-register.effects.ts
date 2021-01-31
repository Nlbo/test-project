import {Injectable} from '@angular/core';
import {AuthService} from '@api/auth/auth.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {IUserModel} from '@api/auth/res/user.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction
} from '@pages/auth/store/actions/auth-register.actions';

@Injectable({
  providedIn: 'root'
})

export class AuthRegisterEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((response: IUserModel) => {
            return registerSuccessAction({response});
          }),
          catchError(({errorResponse}) => {
            return of(registerFailureAction(errorResponse));
          })
        );
      })
    ));


  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {
  }
}

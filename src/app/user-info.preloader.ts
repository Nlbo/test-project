import {Injectable} from '@angular/core';
import {AuthService} from '@api/auth/auth.service';
import {Store} from '@ngrx/store';
import {AuthHelperService} from '@pages/auth/services/auth-helper.service';
import {getUserInfoAction, getUserInfoSuccessAction} from '@pages/auth/store/actions/auth-get-user-info.actions';
import {Actions, ofType} from '@ngrx/effects';

@Injectable({
  providedIn: 'root'
})
export class UserInfoPreloader {

  constructor(
    private authService: AuthService,
    private authHelperService: AuthHelperService,
    private store: Store,
    private actionSubject: Actions,
  ) {
  }

  load() {
    return new Promise(async (resolve, reject) => {
      const id = localStorage.getItem('userId');
      if (id) {
        this.actionSubject.pipe(ofType(getUserInfoSuccessAction)).subscribe((user) => {
          resolve(true);
        });
        this.store.dispatch(getUserInfoAction({id}));
      } else {
        resolve(true);
      }
    });
  }
}

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CatsService} from '@api/cats/cats.service';
import {ICatModel} from '@api/cats/res/cat.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  getOneCatAction,
  getOneCatFailureAction,
  getOneCatSuccessAction
} from '@pages/cats/store/actions/cats-get-one.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatsGetOneEffects {

  getOneCat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOneCatAction),
      switchMap(({id}) => {
        return this.catsService.getOneCat(id).pipe(
          map((response: ICatModel) => {
            return getOneCatSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getOneCatFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private catsService: CatsService,
  ) {
  }
}

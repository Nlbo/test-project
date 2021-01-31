import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CatsService} from '@api/cats/cats.service';
import {ICatModel} from '@api/cats/res/cat.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  getCatsListAction,
  getCatsListFailureAction,
  getCatsListSuccessAction
} from '@pages/cats/store/actions/cats-list.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatsListEffects {

  catsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCatsListAction),
      switchMap(() => {
        return this.catsService.getCatsList().pipe(
          map((response: ICatModel[]) => {
            return getCatsListSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCatsListFailureAction({errorResponse}));
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

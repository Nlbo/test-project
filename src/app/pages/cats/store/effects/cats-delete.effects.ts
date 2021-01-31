import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CatsService} from '@api/cats/cats.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  deleteCatAction,
  deleteCatFailureAction,
  deleteCatSuccessAction
} from '@pages/cats/store/actions/cats-delete.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatsDeleteEffects {

  deleteCat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCatAction),
      switchMap(({id}) => {
        return this.catsService.deleteCat(id).pipe(
          map(() => {
            return deleteCatSuccessAction({id});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(deleteCatFailureAction({errorResponse}));
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

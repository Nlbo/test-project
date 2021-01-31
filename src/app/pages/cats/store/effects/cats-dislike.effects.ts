import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CatsService} from '@api/cats/cats.service';
import {ICatModel} from '@api/cats/res/cat.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  dislikeCatAction,
  dislikeCatFailureAction,
  dislikeCatSuccessAction
} from '@pages/cats/store/actions/cats-dislike.actions';

@Injectable({
  providedIn: 'root'
})
export class CatsDislikeEffects {

  catsDislike$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dislikeCatAction),
      switchMap(({id, cat}) => {
        return this.catsService.editCat(id, cat).pipe(
          map((response: ICatModel) => {
            return dislikeCatSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(dislikeCatFailureAction({errorResponse}));
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

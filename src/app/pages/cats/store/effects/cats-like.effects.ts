import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CatsService} from '@api/cats/cats.service';
import {ICatModel} from '@api/cats/res/cat.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {likeCatAction, likeCatFailureAction, likeCatSuccessAction} from '@pages/cats/store/actions/cats-like.actions';

@Injectable({
  providedIn: 'root'
})
export class CatsLikeEffects {

  catsLike$ = createEffect(() =>
    this.actions$.pipe(
      ofType(likeCatAction),
      switchMap(({id, cat}) => {
        return this.catsService.editCat(id, cat).pipe(
          map((response: ICatModel) => {
            return likeCatSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(likeCatFailureAction({errorResponse}));
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

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CatsService} from '@api/cats/cats.service';
import {ICatModel} from '@api/cats/res/cat.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {editCatAction, editCatFailureAction, editCatSuccessAction} from '@pages/cats/store/actions/cats-edit.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CatsEditEffects {

  editCat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editCatAction),
      switchMap(({id, request}) => {
        return this.catsService.editCat(id, request).pipe(
          map((response: ICatModel) => {
            return editCatSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(editCatFailureAction({errorResponse}));
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

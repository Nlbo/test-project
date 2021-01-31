import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CatsService} from '@api/cats/cats.service';
import {ICatModel} from '@api/cats/res/cat.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  createCatAction,
  createCatFailureAction,
  createCatSuccessAction
} from '@pages/cats/store/actions/cats-create.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatsCreateEffects {

  createCate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCatAction),
      switchMap(({request}) => {
        return this.catsService.createCat(request).pipe(
          map((response: ICatModel) => {
            return createCatSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(createCatFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private catsService: CatsService
  ) {
  }
}

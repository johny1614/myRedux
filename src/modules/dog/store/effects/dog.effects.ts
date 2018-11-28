import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {DogService} from '../services/dog.service';
import {FETCH_DOGS, FetchDogsSuccess} from '../actions/dog.actions';
import {map, switchMap} from 'rxjs/internal/operators';

@Injectable()
export class DogEffects {
  constructor(
    private actions$: Actions,
    private dogsService: DogService
  ) { }

  @Effect()
  fetch$ = this.actions$.ofType(FETCH_DOGS).
  pipe(
    switchMap(() => this.dogsService.fetch()),
    map((resp) => {console.log('res',resp);return new FetchDogsSuccess(resp)})
  )
}

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {take} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Api} from '../../../../app/utils/api';
import {map} from 'rxjs/internal/operators';

export const LOCALSTORAGE_KEY = 'LstoreKey';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  state: any[];

  constructor(private store: Store<any>, private httpClient: HttpClient) {
    console.log('store', this.store);
  }

  getStorage() {
    this.state = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
    return of(this.state);
  }

  updateStorage() {
    this.store.select('dog').pipe(take(1)).subscribe(({card: {data}}) => {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
    });
    return of(true);
  }

  fetch() {
    return this.httpClient.get(Api.DOG_END_POINT).pipe(
      map((resp: any) => resp.data)
    );
  }

}

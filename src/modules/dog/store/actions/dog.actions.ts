import { Action } from "@ngrx/store";

export const LOAD_DOG = '[Dog] Load';
export const FETCH_DOGS = "[Dog] Fetch";
export const FETCH_DOGS_SUCCESS = "[Dog] Fetch success"
export class LoadDog implements Action {
  readonly type = LOAD_DOG;
}

export class FetchDogsSuccess implements Action {
  readonly type: string = FETCH_DOGS_SUCCESS;
  constructor(public payload){}
}

export type DogAction = LoadDog;

export class FetchDogs implements Action {
  readonly type: string = FETCH_DOGS;
}

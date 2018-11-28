import { createFeatureSelector, createSelector } from "@ngrx/store";

const getDogState = createFeatureSelector('dogs');

export const getItemsData = createSelector(
  getDogState,
  (state: any) => {console.log('wczytane stejt to',state);return state.data}
)

import { createSelector } from 'reselect';
import { MyStore } from './initialState';

export const $i = (i: MyStore) => i;

export const $appState = createSelector($i, (state) => state.appState);

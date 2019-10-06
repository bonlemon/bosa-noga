import { FETCH_ITEMS, FETCH_MORE_ITEMS, CHANGE_QUERY_TEXT } from '../constants';
import { createAsyncActions, getActionCreator } from './helpers';

// Sync

export const changeQueryText = getActionCreator(CHANGE_QUERY_TEXT);

// Async

export const { fetchItemsLoading, fetchItemsSuccess, fetchItemsFailure } = createAsyncActions(FETCH_ITEMS);

export const { fetchMoreItemsLoading, fetchMoreItemsSuccess, fetchMoreItemsFailure } = createAsyncActions(
    FETCH_MORE_ITEMS
);

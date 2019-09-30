import { FETCH_ITEMS, FETCH_MORE_ITEMS, CHANGE_QUERY_TEXT, MAKE_ORDER } from '../constants';
import { createAsyncActions } from './helpers';

// Sync

export const changeQueryText = ({ queryText }) => {
    return {
        type: CHANGE_QUERY_TEXT,
        payload: {
            queryText,
        },
    };
};

// Async

export const { fetchItemsLoading, fetchItemsSuccess, fetchItemsFailure } = createAsyncActions(FETCH_ITEMS);

export const { fetchMoreItemsLoading, fetchMoreItemsSuccess, fetchMoreItemsFailure } = createAsyncActions(
    FETCH_MORE_ITEMS
);

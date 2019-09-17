import { FETCH_ITEMS_LOADING, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from '../constants';

export const fetchItemsLoading = (params) => {
    return {
        type: FETCH_ITEMS_LOADING,
        payload: {
            ...params,
        },
    };
};
export const fetchItemsSuccess = (items) => {
    return {
        type: FETCH_ITEMS_SUCCESS,
        payload: {
            items,
        },
    };
};
export const fetchItemsFailure = (error) => {
    return {
        type: FETCH_ITEMS_FAILURE,
        payload: {
            error,
        },
    };
};

import { FETCH_ITEMS_LOADING, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from '../constants';

export const fetchItemsLoading = (params) => {
    return {
        type: FETCH_ITEMS_LOADING,
        payload: {
            ...params,
        },
    };
};
export const fetchItemsSuccess = (list) => {
    return {
        type: FETCH_ITEMS_SUCCESS,
        payload: {
            list,
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

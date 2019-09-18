import { FETCH_CATEGORIES_LOADING, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../constants';

export const fetchCategoriesLoading = () => {
    return {
        type: FETCH_CATEGORIES_LOADING,
    };
};
export const fetchCategoriesSuccess = (list) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: {
            list,
        },
    };
};
export const fetchCategoriesFailure = (error) => {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: {
            error,
        },
    };
};

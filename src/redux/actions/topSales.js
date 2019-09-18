import { FETCH_TOP_SALES_LOADING, FETCH_TOP_SALES_SUCCESS, FETCH_TOP_SALES_FAILURE } from '../constants';

export const fetchTopSalesLoading = () => {
    return {
        type: FETCH_TOP_SALES_LOADING,
    };
};
export const fetchTopSalesSuccess = (list) => {
    return {
        type: FETCH_TOP_SALES_SUCCESS,
        payload: {
            list,
        },
    };
};
export const fetchTopSalesFailure = (error) => {
    return {
        type: FETCH_TOP_SALES_FAILURE,
        payload: {
            error,
        },
    };
};

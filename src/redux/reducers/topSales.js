import { FETCH_TOP_SALES_LOADING, FETCH_TOP_SALES_SUCCESS, FETCH_TOP_SALES_FAILURE } from 'src/redux/constants';

const INITIAL_STATE = {
    list: [],
    isLoading: false,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TOP_SALES_LOADING: {
            return {
                ...state,
                list: [],
                isLoading: true,
                error: null,
            };
        }
        case FETCH_TOP_SALES_SUCCESS: {
            return {
                ...state,
                list: action.payload.list,
                isLoading: false,
                error: null,
            };
        }
        case FETCH_TOP_SALES_FAILURE: {
            return {
                ...state,
                list: [],
                isLoading: false,
                error: action.payload.error,
            };
        }
        default:
            return state;
    }
};

export const getTopSales = (state) => state.topSales.list;
export const getTopSalesisLoading = (state) => state.topSales.isLoading;
export const getTopSalesErrors = (state) => state.topSales.error;

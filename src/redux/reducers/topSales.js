import { RESET_ERRORS } from '../constants';
import { fetchTopSalesFailure, fetchTopSalesLoading, fetchTopSalesSuccess } from '../actions';

const INITIAL_STATE = {
    list: [],
    isLoading: false,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case fetchTopSalesLoading().type: {
            return {
                ...state,
                list: [],
                isLoading: true,
                error: null,
            };
        }
        case fetchTopSalesSuccess().type: {
            return {
                ...state,
                list: action.payload.list,
                isLoading: false,
                error: null,
            };
        }
        case fetchTopSalesFailure().type: {
            return {
                ...state,
                list: [],
                isLoading: false,
                error: action.payload.error,
            };
        }

        case RESET_ERRORS: {
            return {
                ...state,
                error: null,
            };
        }
        default:
            return state;
    }
};

export const getTopSales = (state) => state.topSales.list;
export const getTopSalesisLoading = (state) => state.topSales.isLoading;
export const getTopSalesErrors = (state) => state.topSales.error;

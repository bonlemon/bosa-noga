import { FETCH_ITEMS_LOADING, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from '../constants';

const INITIAL_STATE = {
    list: [],
    isLoading: false,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ITEMS_LOADING: {
            return {
                ...state,
                list: [],
                isLoading: true,
                error: null,
            };
        }
        case FETCH_ITEMS_SUCCESS: {
            return {
                ...state,
                list: action.payload.list,
                isLoading: false,
                error: null,
            };
        }
        case FETCH_ITEMS_FAILURE: {
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

export const getitems = (state) => state.items.list;
export const getitemsisLoading = (state) => state.items.isLoading;
export const getitemsErrors = (state) => state.items.error;

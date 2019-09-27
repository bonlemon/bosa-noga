import {
    FETCH_ITEMS_LOADING,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    FETCH_MORE_ITEMS_SUCCESS,
    FETCH_MORE_ITEMS_FAILURE,
    FETCH_MORE_ITEMS_LOADING,
    CHANGE_QUERY_TEXT,
} from '../constants';

const INITIAL_STATE = {
    list: [],
    productById: null,
    categoryId: 0,
    queryText: '',
    isLoading: false,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ITEMS_LOADING: {
            return {
                ...state,
                list: [],
                categoryId: action.payload.categoryId || 0,
                isLoading: true,
                error: null,
            };
        }
        case FETCH_ITEMS_SUCCESS: {
            return {
                ...state,
                list: [...action.payload.list],
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
        case FETCH_MORE_ITEMS_LOADING: {
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        }
        case FETCH_MORE_ITEMS_SUCCESS: {
            return {
                ...state,
                list: [...state.list, ...action.payload.list],
                isLoading: false,
                error: null,
            };
        }
        case FETCH_MORE_ITEMS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }

        case CHANGE_QUERY_TEXT: {
            return {
                ...state,
                queryText: action.payload.queryText,
            };
        }

        default:
            return state;
    }
};

export const getItems = (state) => state.items.list;
export const getItemsIsLoading = (state) => state.items.isLoading;
export const getItemsErrors = (state) => state.items.error;
export const getSelectedCategoryId = (state) => state.items.categoryId;
export const getSelectedProductById = (state) => state.items.productById;
export const getItemsQueryText = (state) => state.items.queryText;

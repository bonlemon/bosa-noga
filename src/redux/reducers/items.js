import { CHANGE_QUERY_TEXT } from '../constants';
import {
    fetchItemsFailure,
    fetchItemsLoading,
    fetchItemsSuccess,
    fetchMoreItemsFailure,
    fetchMoreItemsLoading,
    fetchMoreItemsSuccess,
} from '../actions';

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
        case fetchItemsLoading().type: {
            return {
                ...state,
                list: [],
                productById: null,
                categoryId: action.payload.categoryId || 0,
                isLoading: true,
                error: null,
            };
        }
        case fetchItemsSuccess().type: {
            return {
                ...state,
                list: [...action.payload.list],
                productById: action.payload.byId,
                isLoading: false,
                error: null,
            };
        }
        case fetchItemsFailure().type: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        case fetchMoreItemsLoading().type: {
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        }
        case fetchMoreItemsSuccess().type: {
            return {
                ...state,
                list: [...state.list, ...action.payload.list],
                isLoading: false,
                error: null,
            };
        }
        case fetchMoreItemsFailure().type: {
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

import { FETCH_CATEGORIES_LOADING, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../constants';

const INITIAL_STATE = {
    list: [],
    isLoading: false,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_LOADING: {
            return {
                ...state,
                list: [],
                isLoading: true,
                error: null,
            };
        }
        case FETCH_CATEGORIES_SUCCESS: {
            return {
                ...state,
                list: action.payload.list,
                isLoading: false,
                error: null,
            };
        }
        case FETCH_CATEGORIES_FAILURE: {
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

export const categoriesSelector = (state) => state.categories.list;
export const categoriesIsLoadingSelector = (state) => state.categories.isLoading;
export const categoriesErrorSelector = (state) => state.categories.error;

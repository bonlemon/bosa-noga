import { fetchCategoriesFailure, fetchCategoriesLoading, fetchCategoriesSuccess } from '../actions';

const INITIAL_STATE = {
    list: [],
    isLoading: false,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case fetchCategoriesLoading().type: {
            return {
                ...state,
                list: [],
                isLoading: true,
                error: null,
            };
        }
        case fetchCategoriesSuccess().type: {
            return {
                ...state,
                list: action.payload.list,
                isLoading: false,
                error: null,
            };
        }
        case fetchCategoriesFailure().type: {
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
export const getCategoriesError = (state) => state.categories.error;

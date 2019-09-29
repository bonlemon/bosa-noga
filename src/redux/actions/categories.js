import { FETCH_CATEGORIES } from '../constants';
import { createAsyncActions } from './helpers';

export const { fetchCategoriesLoading, fetchCategoriesSuccess, fetchCategoriesFailure } = createAsyncActions(
    FETCH_CATEGORIES
);

import { FETCH_TOP_SALES } from '../constants';
import { createAsyncActions } from './helpers';

export const { fetchTopSalesLoading, fetchTopSalesSuccess, fetchTopSalesFailure } = createAsyncActions(FETCH_TOP_SALES);

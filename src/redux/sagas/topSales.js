import { takeEvery, put } from 'redux-saga/effects';
import { fetchTopSalesSuccess, fetchTopSalesFailure } from '../actions';
import { FETCH_TOP_SALES_LOADING } from '../constants';
import { apiService } from '../../utils';

function* fetchTopSales() {
    try {
        const data = yield apiService.fetchTopSales();
        yield put(fetchTopSalesSuccess(data));
    } catch (e) {
        yield put(fetchTopSalesFailure(e.message));
    }
}

export function* watchFetchTopSales() {
    yield takeEvery(FETCH_TOP_SALES_LOADING, fetchTopSales);
}

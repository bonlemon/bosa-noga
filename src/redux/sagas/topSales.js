import { takeEvery, put } from 'redux-saga/effects';
import { fetchTopSalesSuccess, fetchTopSalesFailure } from '../actions';
import { FETCH_TOP_SALES_LOADING } from '../constants';

function* fetchTopSales() {
    try {
        const response = yield fetch('http://localhost:7070/api/top-sales');
        const data = yield response.json();
        yield put(fetchTopSalesSuccess(data));
    } catch (e) {
        yield put(fetchTopSalesFailure(e.message));
    }
}

export function* watchFetchTopSales() {
    yield takeEvery(FETCH_TOP_SALES_LOADING, fetchTopSales);
}

import { takeEvery, put } from 'redux-saga/effects';
import { fetchTopSalesSuccess, fetchTopSalesFailure, fetchTopSalesLoading } from '../actions';
import { apiService } from '../../utils';

function* fetchTopSales() {
    try {
        const { data } = yield apiService.fetchTopSales();
        yield put(fetchTopSalesSuccess({ list: data }));
    } catch (e) {
        yield put(fetchTopSalesFailure(e.message));
    }
}

export function* watchFetchTopSales() {
    yield takeEvery(fetchTopSalesLoading().type, fetchTopSales);
}

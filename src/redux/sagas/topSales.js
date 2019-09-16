import { takeEvery, put } from 'redux-saga/effects';
import { fetchTopSalesSuccess, fetchTopSalesFailure } from 'src/redux/actions';
import { FETCH_TOP_SALES_LOADING } from 'src/redux/constants';

function* fetchTopSales(action) {
    try {
        yield put(fetchTopSalesSuccess());
    } catch (e) {
        yield put(fetchTopSalesFailure(e.message));
    }
}

export function* watchFetchTopSales() {
    yield takeEvery(FETCH_TOP_SALES_LOADING, fetchTopSales);
}

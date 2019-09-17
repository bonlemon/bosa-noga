import { takeEvery, put } from 'redux-saga/effects';
import { fetchTopSalesSuccess, fetchTopSalesFailure } from '../actions';
import { FETCH_TOP_SALES_LOADING } from '../constants';

function* fetchTopSales(action) {
    try {
        fetch('http://localhost:7070/api/top-sales')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));

        yield put(fetchTopSalesSuccess());
    } catch (e) {
        yield put(fetchTopSalesFailure(e.message));
    }
}

export function* watchFetchTopSales() {
    yield takeEvery(FETCH_TOP_SALES_LOADING, fetchTopSales);
}

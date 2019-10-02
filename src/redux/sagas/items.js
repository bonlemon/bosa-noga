import { takeEvery, put } from 'redux-saga/effects';
import {
    fetchItemsSuccess,
    fetchItemsFailure,
    fetchMoreItemsSuccess,
    fetchMoreItemsFailure,
    fetchItemsLoading,
    fetchMoreItemsLoading,
} from '../actions';
import { apiService } from '../../utils';

function* fetchItemsWorker({ payload }) {
    try {
        const url = apiService.getQueryString(payload);
        const {data} = yield apiService.fetchItems({ queryString: url });

        const list = Array.isArray(data) ? data : [];
        const byId = Array.isArray(data) ? null : data;

        yield put(fetchItemsSuccess({ list, byId }));
    } catch (e) {
        yield put(fetchItemsFailure({ error: e.message }));
    }
}

export function* watchFetchItems() {
    yield takeEvery(fetchItemsLoading().type, fetchItemsWorker);
}

function* fetchMoreItemsWorker({ payload }) {
    try {
        const url = apiService.getQueryString(payload);
        const data = yield apiService.fetchItems({ queryString: url });

        yield put(fetchMoreItemsSuccess({ list: data }));
    } catch (e) {
        yield put(fetchMoreItemsFailure({ error: e.message }));
    }
}

export function* watchFetchMoreItems() {
    yield takeEvery(fetchMoreItemsLoading().type, fetchMoreItemsWorker);
}

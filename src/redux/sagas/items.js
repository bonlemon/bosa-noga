import { takeEvery, put } from 'redux-saga/effects';
import { fetchItemsSuccess, fetchItemsFailure, fetchMoreItemsSuccess, fetchMoreItemsFailure } from '../actions';
import { FETCH_ITEMS_LOADING, FETCH_MORE_ITEMS_LOADING } from '../constants';

function getUrl(payload) {
    let url = 'http://localhost:7070/api/items';

    if (Object.keys(payload).length) {
        url += '?';
        Object.keys(payload).forEach((key) => {
            url += payload[key] ? `${key}=${payload[key]}&` : '';
        });
    }
    return url;
}

function* fetchItems({ payload }) {
    try {
        const url = getUrl(payload);
        const response = yield fetch(url);
        const data = yield response.json();
        yield put(fetchItemsSuccess(data));
    } catch (e) {
        yield put(fetchItemsFailure(e.message));
    }
}

export function* watchFetchItems() {
    yield takeEvery(FETCH_ITEMS_LOADING, fetchItems);
}

function* fetchMoreItems({ payload }) {
    try {
        const url = getUrl(payload);

        const response = yield fetch(url);
        const data = yield response.json();
        yield put(fetchMoreItemsSuccess(data));
    } catch (e) {
        yield put(fetchMoreItemsFailure(e.message));
    }
}

export function* watchFetchMoreItems() {
    yield takeEvery(FETCH_MORE_ITEMS_LOADING, fetchMoreItems);
}

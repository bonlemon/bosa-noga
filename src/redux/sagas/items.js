import { takeEvery, put } from 'redux-saga/effects';
import {
    fetchItemsSuccess,
    fetchItemsFailure,
    fetchMoreItemsSuccess,
    fetchMoreItemsFailure,
    fetchItemsLoading,
    fetchMoreItemsLoading,
} from '../actions';

function getUrl(payload) {
    let url = 'http://localhost:7070/api/items';

    if (payload.id) {
        return `${url}/${payload.id}`;
    }

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
        const list = Array.isArray(data) ? data : [];
        const byId = Array.isArray(data) ? null : data;
        yield put(fetchItemsSuccess({ list, byId }));
    } catch (e) {
        yield put(fetchItemsFailure({ error: e.message }));
    }
}

export function* watchFetchItems() {
    yield takeEvery(fetchItemsLoading().type, fetchItems);
}

function* fetchMoreItems({ payload }) {
    try {
        const url = getUrl(payload);

        const response = yield fetch(url);
        const data = yield response.json();
        yield put(fetchMoreItemsSuccess({ list: data }));
    } catch (e) {
        yield put(fetchMoreItemsFailure({ error: e.message }));
    }
}

export function* watchFetchMoreItems() {
    yield takeEvery(fetchMoreItemsLoading().type, fetchMoreItems);
}

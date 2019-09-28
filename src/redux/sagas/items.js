import { takeEvery, put } from 'redux-saga/effects';
import {
    fetchItemsSuccess,
    fetchItemsFailure,
    fetchMoreItemsSuccess,
    fetchMoreItemsFailure,
    fetchItemsLoading,
    fetchMoreItemsLoading,
} from '../actions';
import { SERVER_URL } from '../constants';
import { makeOrderFailure, makeOrderLoading, makeOrderSuccess } from '../actions/items';

function getUrl(payload) {
    let url = `${SERVER_URL}/items`;

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

function* fetchItemsWorker({ payload }) {
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
    yield takeEvery(fetchItemsLoading().type, fetchItemsWorker);
}

function* fetchMoreItemsWorker({ payload }) {
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
    yield takeEvery(fetchMoreItemsLoading().type, fetchMoreItemsWorker);
}

function* makeOrderWorker({ payload }) {
    try {
        const { owner, items } = payload;
        const response = yield fetch(`${SERVER_URL}/order`, { method: 'POST', body: { owner, items } });
        const data = yield response.json();
        yield put(makeOrderSuccess());
    } catch (e) {
        yield put(makeOrderFailure({ error: e.message }));
    }
}

export function* watchMakeOrder() {
    yield takeEvery(makeOrderLoading().type, makeOrderWorker);
}

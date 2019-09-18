import { takeEvery, put } from 'redux-saga/effects';
import { fetchItemsSuccess, fetchItemsFailure, fetchCategoriesSuccess } from '../actions';
import { FETCH_ITEMS_LOADING } from '../constants';

function* fetchItems({ payload }) {
    try {
        let url = 'http://localhost:7070/api/items';

        if (Object.keys(payload).length) {
            url += '?';
            Object.keys(payload).forEach((key) => {
                url += payload[key] ? `${key}=${payload[key]}&` : '';
            });
        }

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

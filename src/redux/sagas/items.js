import { takeEvery, put } from 'redux-saga/effects';
import { fetchItemsSuccess, fetchItemsFailure } from '../actions';
import { FETCH_ITEMS_LOADING } from '../constants';

function* fetchItems({ payload }) {
    try {
        const { id, categoryId, offset } = payload;
        fetch('http://localhost:7070/api/items', { id })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));

        yield put(fetchItemsSuccess());
    } catch (e) {
        yield put(fetchItemsFailure(e.message));
    }
}

export function* watchFetchItems() {
    yield takeEvery(FETCH_ITEMS_LOADING, fetchItems);
}

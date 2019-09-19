import { takeEvery, put } from 'redux-saga/effects';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from '../actions';
import { FETCH_CATEGORIES_LOADING } from '../constants';

function* fetchCategories() {
    try {
        const response = yield fetch('http://localhost:7070/api/categories');
        const data = yield response.json();
        yield put(fetchCategoriesSuccess([...data, { id: 0, title: 'Все' }]));
    } catch (e) {
        yield put(fetchCategoriesFailure(e.message));
    }
}

export function* watchFetchCategories() {
    yield takeEvery(FETCH_CATEGORIES_LOADING, fetchCategories);
}

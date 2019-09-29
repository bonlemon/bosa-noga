import { takeEvery, put } from 'redux-saga/effects';
import { fetchCategoriesSuccess, fetchCategoriesFailure, fetchCategoriesLoading } from '../actions';

function* fetchCategories() {
    try {
        const response = yield fetch('http://localhost:7070/api/categories');
        const data = yield response.json();
        yield put(fetchCategoriesSuccess({ list: [{ id: 0, title: 'Все' }, ...data] }));
    } catch (e) {
        yield put(fetchCategoriesFailure({ error: e.message }));
    }
}

export function* watchFetchCategories() {
    yield takeEvery(fetchCategoriesLoading().type, fetchCategories);
}

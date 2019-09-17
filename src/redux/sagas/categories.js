import { takeEvery, put } from 'redux-saga/effects';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from '../actions';
import { FETCH_CATEGORIES_LOADING } from '../constants';

function* fetchCategories(action) {
    try {
        fetch('http://localhost:7070/api/categories')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));

        yield put(fetchCategoriesSuccess());
    } catch (e) {
        yield put(fetchCategoriesFailure(e.message));
    }
}

export function* watchFetchCategories() {
    yield takeEvery(FETCH_CATEGORIES_LOADING, fetchCategories);
}

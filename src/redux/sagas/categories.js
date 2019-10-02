import { takeEvery, put } from 'redux-saga/effects';
import { fetchCategoriesSuccess, fetchCategoriesFailure, fetchCategoriesLoading } from '../actions';
import { apiService } from '../../utils';

function* fetchCategories() {
    try {
        const data = yield apiService.fetchCategories();

        yield put(fetchCategoriesSuccess({ list: [{ id: 0, title: 'Все' }, ...data] }));
    } catch (e) {
        yield put(fetchCategoriesFailure({ error: e.message }));
    }
}

export function* watchFetchCategories() {
    yield takeEvery(fetchCategoriesLoading().type, fetchCategories);
}

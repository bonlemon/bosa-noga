import { takeEvery, put } from 'redux-saga/effects';
import { makeOrderFailure, makeOrderLoading, makeOrderSuccess } from '../actions/basket';
import { apiService } from '../../utils';

function* makeOrderWorker({ payload }) {
    try {
        const { status } = yield apiService.makeOrder({ body: JSON.stringify({ ...payload }) });

        if (status === 204) {
            yield put(makeOrderSuccess());
        } else {
            throw new Error('Произошла ошибка при размещении заказа');
        }
    } catch (e) {
        yield put(makeOrderFailure({ error: e.message }));
    }
}

export function* watchMakeOrder() {
    yield takeEvery(makeOrderLoading().type, makeOrderWorker);
}

import { takeEvery, put } from 'redux-saga/effects';
import { SERVER_URL } from '../constants';
import { makeOrderFailure, makeOrderLoading, makeOrderSuccess } from '../actions/basket';

function* makeOrderWorker({ payload }) {
    try {
        const body = JSON.stringify({ ...payload });

        const response = yield fetch(`${SERVER_URL}/order`, { method: 'POST', body });

        if (response.status === 204) {
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

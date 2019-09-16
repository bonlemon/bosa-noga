import { call, all } from 'redux-saga/effects';
import { watchFetchTopSales } from './topSales';

export default function* rootSaga() {
    return yield all[call(watchFetchTopSales)];
}

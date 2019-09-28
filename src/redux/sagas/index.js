import { call, all } from 'redux-saga/effects';
import { watchFetchTopSales } from './topSales';
import { watchFetchCategories } from './categories';
import { watchFetchItems, watchFetchMoreItems, watchMakeOrder } from './items';

export default function* rootSaga() {
    yield all([
        call(watchFetchTopSales),
        call(watchFetchCategories),
        call(watchFetchItems),
        call(watchFetchMoreItems),
        call(watchMakeOrder),
    ]);
}

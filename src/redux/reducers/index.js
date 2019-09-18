import { combineReducers } from 'redux';
import basket from './basket';
import topSales from './topSales';
import categories from './categories';
import items from './items';

export default combineReducers({
    basket,
    topSales,
    categories,
    items,
});

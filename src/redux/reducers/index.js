import { combineReducers } from 'redux';
import basket from './basket';
import topSales from './topSales';
import categories from './categories';

export default combineReducers({
    basket,
    topSales,
    categories,
});

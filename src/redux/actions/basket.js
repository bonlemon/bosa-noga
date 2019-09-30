import { ADD_ITEM_INTO_BASKET, EDIT_OWNER, REMOVE_ITEM_INTO_BASKET, INITIAL_BASKET, MAKE_ORDER } from '../constants';
import { createAsyncActions, getActionCreator } from './helpers';

// Sync

export const addProductIntoBasket = getActionCreator(ADD_ITEM_INTO_BASKET);
export const removeProductIntoBasket = getActionCreator(REMOVE_ITEM_INTO_BASKET);
export const editOwner = getActionCreator(EDIT_OWNER);
export const initialBasket = getActionCreator(INITIAL_BASKET);

// Async

export const { makeOrderLoading, makeOrderSuccess, makeOrderFailure } = createAsyncActions(MAKE_ORDER);

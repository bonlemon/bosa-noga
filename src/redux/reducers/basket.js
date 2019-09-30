import { ADD_ITEM_INTO_BASKET, REMOVE_ITEM_INTO_BASKET, EDIT_OWNER, INITIAL_BASKET } from '../constants';
import { makeOrderFailure, makeOrderLoading, makeOrderSuccess } from '../actions';

const INITIAL_STATE = {
    owner: {
        phone: null,
        address: null,
    },
    list: [],
    isSuccess: false,
    isLoading: false,
    error: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case INITIAL_BASKET: {
            return {
                ...state,
                list: [...payload.list],
            };
        }
        case ADD_ITEM_INTO_BASKET: {
            return {
                ...state,
                list: [...state.list, payload.product],
            };
        }
        case REMOVE_ITEM_INTO_BASKET: {
            return {
                ...state,
                list: [...state.list.filter((item) => item.id !== payload.id)],
            };
        }
        case EDIT_OWNER: {
            return {
                ...state,
                owner: Object.assign({}, state.owner, {
                    [payload.id]: payload.value,
                }),
            };
        }
        case makeOrderLoading().type: {
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                error: null,
            };
        }
        case makeOrderSuccess().type: {
            return {
                ...state,
                list: [],
                isLoading: false,
                isSuccess: true,
                error: null,
            };
        }
        case makeOrderFailure().type: {
            return {
                ...state,
                list: [],
                isLoading: false,
                isSuccess: false,
                error: payload.error,
            };
        }
        default:
            return state;
    }
};

export const getOwner = (state) => state.basket.owner;
export const getBasketItems = (state) => state.basket.list;
export const getOrderLoading = (state) => state.basket.isLoading;
export const getOrderSuccess = (state) => state.basket.isSuccess;
export const getOrderError = (state) => state.basket.error;

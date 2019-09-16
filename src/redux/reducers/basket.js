import {
    ADD_ITEM_INTO_BASKET,
    REMOVE_ITEM_INTO_BASKET,
    EDIT_OWNER,
    ORDER_LOADING,
    ORDER_SUCCESS,
    ORDER_FAILURE,
} from 'src/redux/constants';

const INITIAL_STATE = {
    owner: {
        phone: null,
        address: null,
    },
    list: [],
    isLoading: false,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM_INTO_BASKET: {
            return {
                ...state,
                list: [...state.list, action.payload.item],
            };
        }
        case REMOVE_ITEM_INTO_BASKET: {
            return {
                ...state,
                list: [...state.list, action.payload.item],
            };
        }
        case EDIT_OWNER: {
            return {
                ...state,
                owner: { ...state.owner, [action.payload.key]: action.payload.value | null },
            };
        }
        case ORDER_LOADING: {
            return {
                ...state,
                list: [],
                isLoading: true,
                error: null,
            };
        }
        case ORDER_SUCCESS: {
            return {
                ...state,
                list: action.payload.list,
                isLoading: false,
                error: null,
            };
        }
        case ORDER_FAILURE: {
            return {
                ...state,
                list: [],
                isLoading: false,
                error: action.payload.error,
            };
        }
        default:
            return state;
    }
};

export const getOwner = (state) => state.basket.owner;
export const getBasketItems = (state) => state.basket.list;
export const getOrderLoading = (state) => state.basket.isLoading;
export const getOrderError = (state) => state.basket.error;

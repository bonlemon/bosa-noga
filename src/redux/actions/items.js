import {
    FETCH_ITEMS_LOADING,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    FETCH_MORE_ITEMS_LOADING,
    FETCH_MORE_ITEMS_SUCCESS,
    FETCH_MORE_ITEMS_FAILURE,
    FETCH_ITEMS_BY_ID_LOADING,
    FETCH_ITEMS_BY_ID_SUCCESS,
    FETCH_ITEMS_BY_ID_FAILURE,
    CHANGE_QUERY_TEXT,
} from '../constants';

// export const fetchItems = (type = 'loading') => (params) => {
//     const types = {
//         loading: FETCH_ITEMS_LOADING,
//         success: FETCH_ITEMS_LOADING,
//         failure: FETCH_ITEMS_LOADING,
//     };
//     return {
//         type: types[type],
//         payload: {
//             ...params,
//         },
//     };
// };

export const changeQueryText = ({ queryText }) => {
    return {
        type: CHANGE_QUERY_TEXT,
        payload: {
            queryText,
        },
    };
};

export const fetchItemsLoading = (params) => {
    return {
        type: FETCH_ITEMS_LOADING,
        payload: {
            ...params,
        },
    };
};
export const fetchItemsSuccess = (list) => {
    return {
        type: FETCH_ITEMS_SUCCESS,
        payload: {
            list,
        },
    };
};
export const fetchItemsFailure = (error) => {
    return {
        type: FETCH_ITEMS_FAILURE,
        payload: {
            error,
        },
    };
};

export const fetchMoreItemsLoading = (params) => {
    return {
        type: FETCH_MORE_ITEMS_LOADING,
        payload: {
            ...params,
        },
    };
};
export const fetchMoreItemsSuccess = (list) => {
    return {
        type: FETCH_MORE_ITEMS_SUCCESS,
        payload: {
            list,
        },
    };
};
export const fetchMoreItemsFailure = (error) => {
    return {
        type: FETCH_MORE_ITEMS_FAILURE,
        payload: {
            error,
        },
    };
};

export const fetchItemsByIdLoading = (params) => {
    return {
        type: FETCH_ITEMS_BY_ID_LOADING,
        payload: {
            ...params,
        },
    };
};
export const fetchItemsByIdSuccess = (list) => {
    return {
        type: FETCH_ITEMS_BY_ID_SUCCESS,
        payload: {
            list,
        },
    };
};
export const fetchItemsByIdFailure = (error) => {
    return {
        type: FETCH_ITEMS_BY_ID_FAILURE,
        payload: {
            error,
        },
    };
};

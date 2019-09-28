import { toCamelCase } from '../../utils';

function getActionCreator(type) {
    return (params) => {
        return {
            type: type,
            payload: {
                ...params,
            },
        };
    };
}

export function createAsyncActions(actionType) {
    const actionTypes = ['LOADING', 'SUCCESS', 'FAILURE'].map((status) => {
        return `${actionType}_${status}`;
    });
    const actionCreators = {};

    actionTypes.forEach((type) => {
        const actionCreatorName = toCamelCase(type);
        actionCreators[actionCreatorName] = getActionCreator(type);
    });
    return actionCreators;
}

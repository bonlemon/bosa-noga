import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootSaga from './redux/sagas';
import rootReducer from './redux/reducers';

import { loadState, saveState } from './localStorage';
import { throttle } from './utils';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

// Add redux logger if node env is not production
if (process.env.NODE_ENV !== 'production') {
    middleware = [logger, ...middleware];
}

let enhancer = applyMiddleware(...middleware);

// Add redux dev tools if node env is not production
if (process.env.NODE_ENV !== 'production') {
    enhancer = composeWithDevTools(enhancer);
}

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(
    throttle(() => {
        const state = store.getState();
        saveState({ basket: state.basket });
    }, 1000)
);

export default store;

sagaMiddleware.run(rootSaga);

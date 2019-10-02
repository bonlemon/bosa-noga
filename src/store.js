import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootSaga from './redux/sagas';
import rootReducer from './redux/reducers';

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

export default createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

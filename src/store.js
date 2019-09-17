import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootSaga from './redux/sagas';
import rootReducer from './redux/reducers';

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));

sagaMiddleware.run(rootSaga);

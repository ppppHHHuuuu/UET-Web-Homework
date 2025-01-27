import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { initialState } from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
  return applyMiddleware(...middleware);
};

function configureStore(preloadedState = initialState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    bindMiddleware([sagaMiddleware]),
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return store;
}

export default configureStore;

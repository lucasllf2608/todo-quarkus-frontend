import { configureStore } from "@reduxjs/toolkit"; 
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { RouterContextProvider } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
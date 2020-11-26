import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './reduxsaga/saga'
import {reducer} from './reduxsaga/reducer'


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)


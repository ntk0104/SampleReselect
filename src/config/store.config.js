/**
 * @format
 * @flow
 */

import {
  createStore, applyMiddleware, compose, combineReducers
} from 'redux'

import createSagaMiddleware from 'redux-saga'

import { sagas, reducers } from '../redux_sagas'


const reducer = combineReducers(reducers)

const sagaMiddleWares = createSagaMiddleware()
const middleWares = [sagaMiddleWares]

const registerWithMiddleware = (sagas, middleWares: { run: Function }) => {
  sagas.map((saga) => middleWares.run(saga))
}

const configureStore = (initialState) => {
  // Create a redux store with reducers and middleWares
  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleWares))
  )

  // run the saga
  registerWithMiddleware(sagas, sagaMiddleWares)

  // const persistor = persistStore(store)

  return { store }
}

export const { store } = configureStore()

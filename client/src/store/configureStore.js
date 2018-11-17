import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger'

import createRootReducer from '../reducers/'

export default function configureStore(history) {

    const loggerMiddleware = createLogger()
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        createRootReducer(history),
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                thunkMiddleware,
                loggerMiddleware
            )
        )
    )

    return store
}

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger'

import createRootReducer from '../reducers/'

export default function configureStore(history) {

    const loggerMiddleware = createLogger()

    const store = createStore(
        createRootReducer(history),
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunkMiddleware,
                loggerMiddleware
            )
        )
    )

    return store
}

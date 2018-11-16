import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import App from './containers/App'
import configureStore from './store/configureStore';

const history = createBrowserHistory()
const store = configureStore(history)

const render = () => {
    ReactDOM.render(
        <AppContainer>
                <Provider store={store}>
                    <App history={history}/>
                </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render()
    })

    module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer(history))
    })
}

render()
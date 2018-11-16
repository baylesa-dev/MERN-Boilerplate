import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'

const render = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )
}

render()

if (module.hot) {
    module.hot.accept('./containers/App', () => {
      render()
    })

    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer(history))
    })
}
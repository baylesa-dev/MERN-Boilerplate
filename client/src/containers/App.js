import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import configureStore from '../store/configureStore'

import Router from '../components/Router'

class App extends Component {
    constructor(props) {
        super(props)

        this.history = createBrowserHistory()
        this.store = configureStore(this.history)
    }
    render() {
        return (
            <Provider store={this.store}>
                <ConnectedRouter history={this.history}>
                    <Router/>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App
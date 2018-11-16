import React, { Component } from 'react'

import Router from '../components/Router'
import { ConnectedRouter } from 'connected-react-router';

const App = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            <Router/>
        </ConnectedRouter>
    )
}

export default App
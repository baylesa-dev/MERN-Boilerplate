import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSignInAlt, faUserEdit, faAt, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'

import Router from '../components/Router'
import { ConnectedRouter } from 'connected-react-router'

library.add(fab, faSignInAlt, faUserEdit, faAt, faUnlockAlt)

const App = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            <Router/>
        </ConnectedRouter>
    )
}

App.propTypes = {
    history: PropTypes.object
}

export default App
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login, logout } from '../actions/user.action'

class Home extends Component {

    render() {
        return (
            <div style={{flex: 1}}>
                Home
            </div>
        )
    }
}

export default connect()(Home)
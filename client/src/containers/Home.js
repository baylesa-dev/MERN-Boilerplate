import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login, logout } from '../actions/user.action'

class Home extends Component {

    render() {
        return (
            <div>
                <p>M.E.R.N. Boilerplate - Hello REDUX</p>
                {!this.props.auth.isLoggedIn ?
                    <button onClick={() => {
                        this.props.login({ username: 'username', password: 'password' })}}>
                        Login
                    </button> :
                    <button onClick={() => {
                        this.props.logout()
                    }}>Logout</button>}
            </div>
        )
    }
}

Home.propTypes = {
    auth: PropTypes.object,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password)),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
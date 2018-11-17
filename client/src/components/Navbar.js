import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import App from '../containers/App';

class Navbar extends Component {

    navigate(path) {
        if (this.props.pathname !== path)
            this.props.push(path)
    }

    render() {
        return (
            <div className="navbar-container">
                <div className="brand-container" onClick={() => this.navigate('/home')}>
                    <h1>M.E.R.N.</h1>
                </div>
                <nav className="navbar-items navbar-items--right">
                    <div className="link-container" onClick={() => this.navigate('/login')}>
                        {this.props.auth.isLoggedIn
                            ? <FontAwesomeIcon className="icon" icon="user-edit" size="2x"/>
                            : <FontAwesomeIcon className="icon" icon="sign-in-alt" size="2x"/>}
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    pathname: state.router.location.pathname,
})

export default connect(mapStateToProps, { push })(Navbar)
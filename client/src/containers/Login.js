import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'

import { FacebookLoginButton } from "react-social-login-buttons";
import { GithubLoginButton } from "react-social-login-buttons";
import { TwitterLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { InstagramLoginButton } from "react-social-login-buttons";


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            emailValue: '',
            passwordValue: ''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }

    handleChangeEmail(event) {
        this.setState({emailValue: event.target.value})
    }

    handleChangePassword(event) {
        this.setState({passwordValue: event.target.value})
    }

    render() {
        return (
            <div className="background-container">
                    <div className="card-container-shadow">
                        <div className="card-container">
                            <div className="description-title" style={{marginTop: '10px'}}>
                                LOGIN WITH YOUR FAVORITE SOCIAL NETWORKS
                            </div>
                            <div className="login-provider-container">
                                <FacebookLoginButton align="center" className="login-button" onClick={() => alert("Hello")}>
                                    <span className="login-text">Facebook</span>
                                </FacebookLoginButton>
                                <GoogleLoginButton align="center" className="login-button" onClick={() => alert("Hello")}>
                                    <span className="login-text">Google</span>
                                </GoogleLoginButton>
                                <TwitterLoginButton align="center" className="login-button" onClick={() => alert("Hello")}>
                                    <span className="login-text">Twitter</span>
                                </TwitterLoginButton>
                                <InstagramLoginButton align="center" className="login-button" onClick={() => alert("Hello")}>
                                    <span className="login-text">Instagram</span>
                                </InstagramLoginButton>
                                <GithubLoginButton align="center" className="login-button" onClick={() => alert("Hello")} >
                                    <span className="login-text">Github</span>
                                </GithubLoginButton>
                            </div>
                            <div className="description-title">
                                OR LOGIN WITH YOUR EMAIL ADDRESS
                            </div>
                            <form className="login-form-container" onSubmit={() => alert("hello")}>
                                <div className="login-container">
                                    <FontAwesomeIcon className="email-icon" icon="at" color="white" size="2x"/>
                                    <input type="email" className="email-input" value={this.state.emailValue} onChange={this.handleChangeEmail} placeholder="example@mail.com"/>
                                </div>
                                <div className="login-container">
                                    <FontAwesomeIcon className="email-icon" icon="unlock-alt" color="white" size="2x"/>
                                    <input type="password" className="email-input" value={this.state.passwordValue} onChange={this.handleChangePassword} placeholder="*******"/>
                                </div>
                                <div className="login-submit" onClick={() => alert("Hello")}>
                                    LOGIN
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}

export default connect()(Login)
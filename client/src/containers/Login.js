import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import io from 'socket.io-client'

import { FacebookLoginButton } from "react-social-login-buttons"
import { GithubLoginButton } from "react-social-login-buttons"
import { TwitterLoginButton } from "react-social-login-buttons"
import { GoogleLoginButton } from "react-social-login-buttons"
import { InstagramLoginButton } from "react-social-login-buttons"

//const API_URL = "http://localhost:8080"
const API_URL = "https://localhost:8080"
const socket = io(API_URL)

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            emailValue: '',
            passwordValue: '',
            disabled: '',
            loading: true,
            mounted: false
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }

    componentDidMount() {
        this.setState({mounted: true})
    }

    componentWillUnmount() {
        this.setState({mounted: false})
    }

    handleChangeEmail(event) {
        this.setState({emailValue: event.target.value})
    }

    handleChangePassword(event) {
        this.setState({passwordValue: event.target.value})
    }

    checkPopup() {
        const check = setInterval(() => {
            const { popup } = this
            if (!popup || popup.closed || popup.closed == undefined) {
                clearInterval(check)
                if (this.mounted)
                    this.setState({ disabled: '' })
            }
        }, 1)
    }

    openPopup(provider) {
        const width = 600, height = 600
        const left = (window.innerWidth / 2) - (width / 2)
        const top = (window.innerHeight / 2) - (height / 2)
        const url = `${API_URL}/login/${provider}?socketId=${socket.id}`

        return window.open(url, '', `toolbar=no, location=no, directories=no, status=no, menubar=no,
        scrollbars=no, resizable=no, copyhistory=no, width=${width},
        height=${height}, top=${top}, left=${left}`)
    }

    auth(provider) {
        if (!this.state.disabled) {
            this.popup = this.openPopup(provider)
            this.checkPopup()
            if (this.mounted)
                this.setState({disabled: ''})
            socket.on(provider, user => {
                this.popup.close()
                if (user.status !== 'OK' && this.mounted)
                    this.setState({error: "Vous n'êtes pas connecté."})
                else
                    console.log(user)
            })
        }
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
                                <FacebookLoginButton align="center" className="login-button" onClick={() => this.auth('facebook')}>
                                    <span className="login-text">Facebook</span>
                                </FacebookLoginButton>
                                <GoogleLoginButton align="center" className="login-button" onClick={() => this.auth('google')}>
                                    <span className="login-text">Google</span>
                                </GoogleLoginButton>
                                <TwitterLoginButton align="center" className="login-button" onClick={() => this.auth('twitter')}>
                                    <span className="login-text">Twitter</span>
                                </TwitterLoginButton>
                                <InstagramLoginButton align="center" className="login-button" onClick={() => this.auth('instagram')}>
                                    <span className="login-text">Instagram</span>
                                </InstagramLoginButton>
                                <GithubLoginButton align="center" className="login-button" onClick={() => this.auth('github')} >
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
import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { hot } from 'react-hot-loader'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Navbar from './Navbar'

class Router extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        )
    }
}

export default hot(module)(Router)
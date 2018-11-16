import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { hot } from 'react-hot-loader'

import Home from '../containers/Home'

class Router extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        )
    }
}

export default hot(module)(Router)
import React from 'react'

import './css/index.css'
import './css/materialize.css'

import Navbar from './components/Nav/Navbar.js'
import Home from './components/Home.js'
import About from './components/About/About.js'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const routes = [
    { path: '/about', name: 'About', aniName: 'about', aniEnterTime: 6000, aniExitTime: 3000, Component: About},
    { path: '/', name: 'Home', aniName: 'home', aniEnterTime: 3000, aniExitTime: 6000, Component: Home}
]

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initialVisits: {
                '/': false,
                '/about': false,
                '/apps' : false,
                '/blog' : false
            },
            prevLocation: null,
            hasEntered: false
        }
        this.setVisited = this.setVisited.bind(this)
        this.setEntered = this.setEntered.bind(this)
    }
    setVisited(path) {
        if (this.state.initialVisits[path] == false) {
            this.setState({ initialVisits : {[path]: true }})
        }
    }
    setEntered(bool) {
        this.setState({hasEntered: bool})
    }
    componentDidUpdate() {
        if (this.props.location.pathname != this.state.prevLocation) {
            this.setState({prevLocation: this.props.location.pathname})
        }
    } 
    render() {
        return (
                <div>
                    <Navbar location = {this.props.location.pathname}/>
                    {routes.map(({ path, aniName, aniEnterTime, aniExitTime, Component }) => (
                        <Route key={path}>
                                <CSSTransition
                                 classNames = {aniName}
                                 in = {this.props.location.pathname == path}
                                 timeout = {
                                     {
                                         enter: aniEnterTime, 
                                         exit: aniExitTime
                                     }
                                 }
                                 onEnter = {() => this.setEntered(false)}
                                 onEntered = {() => this.setEntered(true)}
                                 unmountOnExit = {true}
                                 >
                                <Component location={this.props.location.pathname} />
                                </CSSTransition>
                        </Route>
                    ))}
                </div>
        );
    }
}

export default App
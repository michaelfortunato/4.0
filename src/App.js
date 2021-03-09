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
    { path: '/about', name: 'Home', Component: About},
    { path: '/', name: 'About', Component: Home}
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
            prevLocation: null
        }
        this.setVisited = this.setVisited.bind(this)
    }
    setVisited(path) {
        if (this.state.initialVisits[path] == false) {
            this.setState({ initialVisits : {[path]: true }})
        }
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
                    {routes.map(({ path, Component }) => (
                        <Route key={path}>
                                <Component location={this.props.location.pathname} beenVisited = {this.state.initialVisits[path]} setVisited={this.setVisited} />
                        </Route>
                    ))}
                </div>
        );
    }
}

export default App
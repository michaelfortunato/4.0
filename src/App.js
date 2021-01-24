import React from 'react'

import './css/index.css'
import './css/materialize.css'

import Navbar from './components/Nav/Navbar.js'
import Home from './components/Home.js'
import About from './components/About.js'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'


class App extends React.Component {
    render() {
        return (
            <Router>
                <div id='App'>
                    <Navbar />
                    <Route key="about" exact path="/about">
                        {({ match }) =>
                        (<CSSTransition
                            classNames="fade"
                            in={match != null}
                            timeout={1000}
                            unmountOnExit
                        >
                            <div className = "abs">
                            <About /> </div>
                            
                        </CSSTransition>
                        )}
                    </Route>
                    <Route key="/" exact path="/">
                        {({ match }) =>
                        (<CSSTransition
                            classNames="fade"
                            in={match != null}
                            timeout={1000}
                            unmountOnExit
                        >
                        <Home /> 
                        </CSSTransition>
                        )}
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App
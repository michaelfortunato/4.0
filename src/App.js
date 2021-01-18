import React from 'react'

import './css/index.css'
import './css/materialize.css'

import Navbar from './components/Nav/Navbar.js'
import Home from './components/Home.js'
import About from './components/About.js'

import { BrowserRouter as Router,
        Route, 
        Switch
} from 'react-router-dom'


class App extends React.Component{
    render() {
        return (
            <Router>
            <div id = 'App'>
                <Navbar />
                <Switch>
                    <Route path = "/about">
                        <About />
                    </Route>
                    <Route path = "/">
                        <Home />
                    </Route>
                </Switch> 
            </div>
            </Router>
        );
    }
}

export default App
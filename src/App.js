import React from 'react'

import './css/index.css'
import './css/materialize.css'

import Navbar from './components/Nav/Navbar.js'
import Home from './components/Home.js'


class App extends React.Component{
    render() {
        return (
            <div id = 'App'>
                <Navbar />
                <Home />
                
            </div>
        )
    }
}

export default App
import React from 'react'
import reactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App.js'



reactDOM.render(
    <BrowserRouter>
        <Route children = {( {location} ) => (<App location = {location} />)} />
    </BrowserRouter>, document.getElementById('root'));
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Grid from './Grid.js';
import Hero from './Hero.js';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {animateNameIn : false, 
                    isNameDone: false,
                    isGridDone : false
                };
        this.setAnimateNameIn = this.setAnimateNameIn.bind(this);
        this.setIsNameDone = this.setIsNameDone.bind(this); //The line behind will bind the "this" keyword to an object of this class, rather than an object of the child class.
        this.setIsGridDone = this.setIsGridDone.bind(this); //will bind ("this" to this class vs. the child class)
    } 
    setAnimateNameIn() {
        this.setState({animateNameIn: true});
    }
    setIsNameDone() {
        this.setState({ isNameDone: true });
    }
    setIsGridDone() {
        this.setState({isGridDone: true});
    }
    render() {
        return (
            <div>
                <Grid  animateNameIn = {this.state.animateNameIn} isNameDone = {this.state.isNameDone} setAnimateNameIn = {this.setAnimateNameIn} setIsGridDone = {this.setIsGridDone} />
                <Hero routeMatch = {this.props.routeMatch} animateNameIn = {this.state.animateNameIn} isNameDone = {this.state.isNameDone} setIsNameDone = {this.setIsNameDone} isGridDone = {this.state.isGridDone}/>
            </div>
        );
    }

}

export default Home;
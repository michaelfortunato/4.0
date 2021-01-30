import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Grid from './Grid.js';
import Hero from './Hero.js';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isGridDone : false, animateNameIn : false};
        this.setAnimateNameIn = this.setAnimateNameIn.bind(this); 
        this.setIsGridDone = this.setIsGridDone.bind(this); //will bind ("this" to this class vs. the child class)
    }
    setIsGridDone() {
        this.setState({isGridDone: true});
    }
    setAnimateNameIn() {
        this.setState({animateNameIn: true});
    }
    render() {
        return (
            <div>
                <Grid  setAnimateNameIn = {this.setAnimateNameIn} isGridDone = {this.state.isGridDone} setIsGridDone = {this.setIsGridDone} />
                <Hero routeMatch = {this.props.routeMatch} animateNameIn = {this.state.animateNameIn} isGridDone = {this.state.isGridDone}/>
            </div>
        );
    }

}

export default Home;
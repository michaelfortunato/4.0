import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Grid from './Grid.js';
import Hero from './Hero.js';

let x = 0;
const defaultGridProps = {
    random: true,
    numLines: 12,
    offset: 0,
    avgDuration: 200,
    avgDelay: 3500,
    duration: 1500,
    delay: 6500,
    isDot: true,
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isGridDone : false};
        this.setIsGridDone = this.setIsGridDone.bind(this); //will bind ("this" to this class vs. the child class)
    }
    setIsGridDone() {
        this.setState({isGridDone: true});
    }
    render() {
        return (
            <div>
                ${!this.state.isGridDone ? <Grid  {...defaultGridProps} setIsGridDone = {this.setIsGridDone} /> : ""}
                <Hero isGridDone = {this.state.isGridDone}/>
            </div>
        );
    }

}

export default Home;
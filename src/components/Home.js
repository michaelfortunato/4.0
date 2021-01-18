import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Grid from './Grid.js';
import Hero from './Hero.js';

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
        this.state = {gridIsDone : false};
        this.setGridIsDone = this.setGridIsDone.bind(this); //will bind ("this" to this class vs. the child class)
    }
    setGridIsDone() {
        this.setState({gridIsDone: true});
    }
    render() {
        return (
            <div>
                <Grid  {...defaultGridProps} />
                <Hero />
            </div>
        );
    }

}

export default Home;
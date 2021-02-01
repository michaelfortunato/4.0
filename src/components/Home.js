import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Grid from './Grid.js';
import Hero from './Hero.js';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isGridDone: false , gridIsDone: false};
        this.setIsGridDone = this.setIsGridDone.bind(this); //will bind ("this" to this class vs. the child class)
        this.setGridIsDone = this.setGridIsDone.bind(this);
    }
    setIsGridDone() {
        this.setState({ isGridDone: true });
    }
    setGridIsDone() {
        this.setState( { gridIsDone: true} );
    }
    render() {
        return (
            <div>
                { !this.state.gridIsDone ? <Grid setIsGridDone={this.setIsGridDone} setGridIsDone = {this.setGridIsDone} /> : null}
                <Hero isGridDone={this.state.isGridDone} routeMatch = {this.props.routeMatch} />
            </div>
        );
    }

}

export default Home;
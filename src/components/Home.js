import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/index.css'
import styled from 'styled-components'                                                                                                      
import Grid from './Grid.js';
import Hero from './Hero.js';

const StyledHome = styled.div `
    background: #e6af4b;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    &.home-enter {

    }
    &.home-enter-active {

    }
    &.home-enter-done {

    }

`;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isGridDone: false, gridIsDone: false };
        this.setIsGridDone = this.setIsGridDone.bind(this); //will bind ("this" to this class vs. the child class)
        this.setGridIsDone = this.setGridIsDone.bind(this);
    }
    setIsGridDone() {
        this.setState({ isGridDone: true });
    }
    setGridIsDone() {
        this.setState({ gridIsDone: true });
    }
    render() {
        return (
            <CSSTransition
                classNames="fade"
                in={this.props.routeMatch != null}
                timeout={1000}
                unmountOnExit
            >
               <StyledHome> 
                    {!this.state.gridIsDone ? <Grid setIsGridDone={this.setIsGridDone} setGridIsDone={this.setGridIsDone} /> : null}
                    <Hero isGridDone={this.state.isGridDone} routeMatch={this.props.routeMatch} />
                </StyledHome>
            </CSSTransition>
        );
    }

}

export default Home;
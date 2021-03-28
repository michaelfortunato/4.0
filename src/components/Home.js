import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/index.css'
import styled from 'styled-components'
import Grid from './Grid.js';
import Hero from './Hero.js';

const StyledHome = styled.div`
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #e6af4b;


    &.home-enter {
        opacity: 0;
    }
    &.home-enter-active {
        opacity: 1;
        background-color: #e6af4b;
        transition-property: opacity background-color;
        transition-duration: 3000ms;
    }
    &.home-enter-done {
        background-color: #e6af4b;
        opacity: 1;
    }

    &.home-exit {
        opacity: 1;
    }
    &.home-exit-active {
        opacity: 0;
        transition-property: opacity;
        transition-duration: 3000ms;
        transition-delay: 3000ms;
    }
    &.home-exit-done {
        opacity: 0;
    }
`;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gridEntered: false, triggerNameEnter: false };
        this.setGridEntered = this.setGridEntered.bind(this);
        this.setTriggerNameEnter = this.setTriggerNameEnter.bind(this) //will bind ("this" to this class vs. the child class)
    }
    setGridEntered() {
        this.setState({ gridEntered: true });
    }
    setTriggerNameEnter() {
        this.setState({ triggerNameEnter: true });
    }
    render() {
        return (
                <StyledHome>
                    {!this.state.gridEntered ? <Grid setGridEntered={this.setGridEntered} setTriggerNameEnter={this.setTriggerNameEnter} /> : null}
                    <Hero gridEntered={this.state.gridEntered} location={this.props.location} triggerNameEnter={this.state.triggerNameEnter} />
                </StyledHome>
        );
    }

}

export default Home;
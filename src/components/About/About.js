import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import '../../css/index.css'
import AboutFirstPage from './AboutFirstPage.js'
import AboutSecondPage from './SecondPage/AboutSecondPage.js'


const StyledAbout = styled.div`
    width: 100vw;
    height:100vh;
    background-color: #14213D;
    position:absolute;
    overflow-x: hidden;
    
    &.about-enter {
        opacity: 0;
    }
    &.about-enter-active {
        opacity: 1;
        background-color: #14213D;
        transition-property: opacity background-color;
        transition-duration: 3000ms;
        transition-delay: 3000ms;
    }
    &.about-enter-done {
        opacity: 1;
        background-color: #14213D;
    }

    &.about-exit {
        opacity: 1;
    }
    &.about-exit-active {
        opacity: 0;
        transition-property: opacity;
        transition-duration: 3000ms;
    }
    &.about-exit-done {
        opacity: 0;
    }
`;
class About extends React.Component {
    constructor(props) {
        super(props);
        this.lottieRef = React.createRef()
    }
    render() {
        return (
            <StyledAbout delayEnter={this.props.delayEnter} >
                {//<AboutFirstPage lottieRef={this.lottieRef} doPlay={true} />
    }
                {false ? <AboutSecondPage /> : null}
            </StyledAbout>);
    }
}
export default About
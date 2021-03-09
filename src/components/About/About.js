import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import '../../css/index.css'
import AboutFirstPage from './AboutFirstPage.js'
import AboutSecondPage from './AboutSecondPage.js'


const StyledAbout = styled.div`
    background-color: #14213D;
    width: 100%;
    overflow-x: hidden;
    &.about-enter {
        opacity: 0;
    }
    &.about-enter-active {
        opacity: 1;
        background-color: #14213D;
        transition-property: opacity background-color;
        transition-duration: 3000ms;
        transition-delay: ${(props) => props.delayEnter}ms;
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
        this.state = {
            fromLocation: "/",
            hasEntered : false
        }
        this.lottieRef = React.createRef()
        this.toggleHasEntered = this.toggleHasEntered.bind(this)
    }
    toggleHasEntered() {
        this.setState({hasEntered : true})
    }
    componentDidUpdate() {
        if (this.props.location != this.state.fromLocation) {
            this.setState({ fromLocation: this.props.location })
        }
    }
    render() {
        let delayEnter = 0
        if ((this.state.fromLocation == "/") && (this.props.location == "/about")) {
            delayEnter = 3000;
        } else {
            delayEnter = 0;
        }
        return (
            <CSSTransition
                classNames="about"
                in={this.props.location == '/about'}
                timeout={{
                    enter: 3000 + delayEnter,
                    exit: 3000
                }}
                onEntered = {this.toggleHasEntered}
                unmountOnExit
            >
                <StyledAbout delayEnter={delayEnter} >
                    <AboutFirstPage lottieRef = {this.lottieRef} doPlay = {this.state.hasEntered}/>
                    {true ? <AboutSecondPage /> : null}
                </StyledAbout>
            </CSSTransition>);
    }
}
export default About
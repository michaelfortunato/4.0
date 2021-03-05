import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import '../css/index.css'
import Lottie from 'lottie-react'
import animationData from '../data.json'
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
}
const StyledAbout = styled.div`
    width: 100%;
    height: 100%; 
    position: absolute;
    background-color: #14213D;

    
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
        console.log("YES")
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
        console.log(delayEnter);
        if (this.state.hasEntered) {this.lottieRef.current.play()}
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
                    <Lottie lottieRef = {this.lottieRef} loop = {true} autoplay = {false} animationData = {animationData}
                        style={{ 'position': 'relative', 'top': '10%', 'height': '40vh' }}
                    />
                </StyledAbout>
            </CSSTransition>);
    }
}
export default About
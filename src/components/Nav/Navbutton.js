import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import Hamburger from 'hamburger-react'
const StyledNavbutton = styled.div`
    position: absolute;
    top: 25%;
    left:2.5%;
    color ${props => props.backgroundColor}; 
    font-size: 65px;
    z-index: 2;
    
    width: 40px;
    height: 45px;
    cursor: pointer;


    .basepatty {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background-color: ${props => props.backgroundColor};
        left: 0;
    }

`;


const StyledPatty1 = styled.span`
    top: 0px;

    &.patty-appear, &.patty-enter  {
        top: 0px;
        transform: rotate(0deg);
    }
    &.patty-appear-active, &.patty-enter-active {
        top: 10px;
        transform: rotate(135deg);
        transition: all 250ms ease-in-out;
    }

    &.patty-appear-done, &.patty-enter-done {
        top: 10px;
        transform: rotate(135deg);
    }

    &.patty-exit {
        top: 10px;
        transform: rotate(135deg);
    }
    &.patty-exit-active {
        top: 0px;
        transform: rotate(0deg);
        transition: all 250ms ease-in-out;
    }
    &.patty-exit-done {
        top: 0px;
        transform: rotate(0deg);
    }

}


`;
const StyledPatty2 = styled.span`
    top: 10px;



    &.patty-appear, &.patty-enter  {}
    &.patty-appear-active, &.patty-enter-active {
        opacity: 0;
        left: -60px;
        transition: all 250ms ease-in-out;
    }

    &.patty-appear-done, &.patty-enter-done {
        opacity: 0;
        left: -60px;
    }

    &.patty-exit {
        opacity: 0;
        left: -60px;
    }
    &.patty-exit-active {
        opacity: 1;
        left: 0px;
        transition: all 250ms ease-in-out;
    }
    &.patty-exit-done {
        opacity: 1;
        left: 0px;
    }



`;

const StyledPatty3 = styled.span` 
    top: 22px;

    &.patty-appear, &.patty-enter  {}
    &.patty-appear-active, &.patty-enter-active {
        top: 10px;
        transform: rotate(-135deg);
        transition: all 250ms ease-in-out;
    }

    &.patty-appear-done, &.patty-enter-done {
        top: 10px;
        transform: rotate(-135deg);
    }

    &.patty-exit {
        top: 10px;
        transform: rotate(-135deg);

    }
    &.patty-exit-active {
        top: 22px;
        transform: rotate(0deg);
        transition: all 250ms ease-in-out;
    }
    &.patty-exit-done {
        top: 22px;
        transform: rotate(0deg);
    }

}
`;

class Navbutton extends React.Component {
    render() {
        return (
            <StyledNavbutton  backgroundColor={this.props.styleConfig.backgroundColor}>
                <Hamburger toggled={this.props.isVisible} toggle={this.props.setIsVisible} />
            </StyledNavbutton>
        );
    }
}



export default Navbutton;
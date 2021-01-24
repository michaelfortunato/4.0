import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group'
import NavItem from './NavItem.js';

const StyledNavContent = styled.div`
    position: relative;
    left: 0;
    height: 100%;
    transform: translateY(-102%);
    background-color: #264653;
    clip-path: polygon(100% 0, 100% 100%, 0% 0%);
    font-size: 10px;


    z-index: 2;


    &.toggle-nav-enter{
        transform: translateY(-102%);
    }
    
    &.toggle-nav-enter-active{
        transform: translateY(0);
        transition: transform 400ms;

    }
    &.toggle-nav-enter-done{
        transform: translateY(0);

    }
    &.toggle-nav-exit{
        transform: translateY(0);
    }
    &.toggle-nav-exit-active{
        transform: translateY(-102%);
        transition: transform 250ms;

    }
    &.toggle-nav-exit-done{
        transform: translateY(-102%);

    }
`;




const NavContent = (props) => {
    return(
        <CSSTransition
        in = {props.isVisible}
        classNames = 'toggle-nav'
        timeout = {400}>
            
            <StyledNavContent className = 'row'>
                <NavItem isFirst = {true} URL = "/" text = "Home"/>
                <NavItem URL = "/about" text = "About"/>
                <NavItem URL = "/Apps" text = "Apps"/>
                <NavItem URL = "/Blog" text = "Blog"/>
            </StyledNavContent>
            
        </CSSTransition>
    );
}



export default NavContent;
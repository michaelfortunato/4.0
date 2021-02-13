import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group'
import NavItem from './NavItem.js';

const StyledNavContent = styled.div`
    position: relative;
    left: 0;
    height: 100%;
    transform: translateY(-102%);
    background-color: ${(props) => props.backgroundColor};
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




class NavContent extends React.Component {
    render() {
        return (
            <CSSTransition
                in={this.props.isVisible}
                classNames='toggle-nav'
                timeout={400} >

                <StyledNavContent className='row' backgroundColor={this.props.styleConfig.backgroundColor}>
                    <NavItem isFirst={true} URL="/" text="HOME" textColor={this.props.styleConfig.textColor} />
                    <NavItem URL="/about" text="ABOUT" textColor={this.props.styleConfig.textColor} />
                    <NavItem URL="/Apps" text="PROJECTS" textColor={this.props.styleConfig.textColor} />
                    <NavItem URL="/Blog" text="BLOG" textColor={this.props.styleConfig.textColor} />
                </StyledNavContent>

            </CSSTransition>
        );
    }
}



export default NavContent;
import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import '../css/index.css'
const StyledAbout = styled.div`
    background: red;
    width: 100%;
    height: 100%; 
    position: absolute;
`;
class About extends React.Component {
    render() {
        return (
             <CSSTransition
                classNames="fade"
                in={this.props.routeMatch != null}
                timeout={1000}
                unmountOnExit
            >
                <StyledAbout>
                    <p>s</p>
                </StyledAbout>
            </CSSTransition>);
    }
}
export default About
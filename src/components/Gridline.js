import React from 'react';
import  styled  from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const w = window.innerWidth;
const h = window.innerHeight;
const circleSize = 10; //in pixels

const circleXScaling = circleSize/w;
const circleYScaling = circleSize/h;

const StyledGridline = styled.div`
    position: absolute;
    background: white;
    height: ${(props) => props.isRow ? `${circleSize}px` : '100%'};
    width: ${(props) => props.isRow ? '100%' : `${circleSize}px`};
    top: ${(props) => props.isRow ? `${props.fixedPos}vh`:  'initial'};
    left: ${(props) => props.isRow ? 'initial':  `${props.fixedPos}vh`};
    
    transform-origin: ${(props) => props.isRow ? `${props.floatingPos}vh` : '50%'}
                        ${(props) => props.isRow ? '50%' : `${props.floatingPos}vh`};
    transform: ${(props) => props.isRow ? `scaleX(${circleXScaling})` : `scaleY(${circleYScaling})`};    
    
    &.line-appear, &.line-enter {
        border-radius: 50%;
        transform: ${(props) => props.isRow ? `scaleX(${circleXScaling})` : `scaleY(${circleYScaling})`};    
    }
    &.line-appear-active, &.line-enter-active {
        
        transform: ${(props) => props.isRow ? `scaleX(1) scaleY(.1)` : `scaleY(1) scaleX(.1)`};  
        transition-duration: ${(props) => props.duration}ms; 
        transition-delay: ${(props) => props.delay}ms; 
        transition-property: all;
        will-change: transform;
    }
    &.line-appear-done, &.line-enter-done {
        transform: ${(props => props.isRow ? 'scaleX(1) scaleY(.1)': 'scaleY(1) scaleX(.1)')};
    }
`;

class Gridline extends React.Component {
    render() {
        return ( <CSSTransition
            in = {true}
            appear =  {true}
            classNames = "line"
            timeout={this.props.duration + this.props.delay}>
                <StyledGridline {...this.props}/>
            </CSSTransition>   
        );
    }
}

export default Gridline;
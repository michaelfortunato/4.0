import React from 'react';
import  styled  from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const StyledGridline = styled.div`
    position: absolute;
    //background:#6699CC;
    //background: #C38D9E;
    z-index: 0;
    background: white;
    

    &.line-appear {
        left: ${(props) => props.isRow ? `${props.floatingPos}%` : `${props.fixedPos}vh`};
        top: ${(props) => props.isRow ? `${props.fixedPos}vh` : `${props.floatingPos}%`};
        height: ${(props) => props.isDot ? '7px': '0px'};
        width: ${(props) => props.isDot ? '7px': '0px'};
        
        border-radius: ${(props) => props.isDot ? '50%': '0%'};
    }
    
    &.line-appear-active {
        height: ${(props) => props.isRow ? '2px': '100%'};
        width:  ${(props) => props.isRow ? '100%': '2px'};
        
        left: ${(props) => props.isRow ? '0% !important': ''};
        top: ${(props) => props.isRow ? '': '0% !important'};
        
        border-radius: 0;
      

        transition-property: all;
        transition-duration: ${(props) => props.duration}ms; 
        transition-delay: ${(props) => props.delay}ms;

        transition-property: all;
        transition-duration: ${(props) => props.duration}ms; 
        transition-delay: ${(props) => props.delay}ms;
        
        -webkit-transition-property: all;
        -webkit-transition-duration: ${(props) => props.duration}ms; 
        -webkit-transition-delay: ${(props) => props.delay}ms;

        -webkit-transition-property: all;
        -webkit-transition-duration: ${(props) => props.duration}ms; 
        -webkit-transition-delay: ${(props) => props.delay}ms;
        will-change: all;
        
    }
    &.line-appear-done{
        height: ${(props) => props.isRow ? '2px': '100%'};
        width:  ${(props) => props.isRow ? '100%': '2px'};
        left: ${(props) => props.isRow ? '0% !important': `${props.fixedPos}vh`};
        top: ${(props) => props.isRow ? `${props.fixedPos}vh`: '0% !important'};
        border-radius: 0;
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
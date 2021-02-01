import React from 'react'
import  styled  from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const StyledLetter = styled.span`
    position: relative;
    display:inline-block;

    transform: translate(${(props) => props.XOffsetEnter}vw, ${(props) => props.YOffsetEnter}vh); 

    &.letter-appear, &.letter-enter{
        transform: translate(${(props) => props.XOffsetEnter}vw, ${(props) => props.YOffsetEnter}vh); 
    }
    
    &.letter-appear-active, &.letter-enter-active{

        transform: translate(0, 0);

        transition: all;
       
        transition-duration: ${(props) => props.durationEnter}ms;
    
    }

    &.letter-appear-done, &.letter-enter-done{
         transform: translate(0, 0);

    
    }

    
`;


class Letter extends React.Component {
    render() {
        return (
            <CSSTransition
                in = {this.props.isGridDone}
                classNames = 'letter'
                timeout = {{
                    enter: this.props.durationEnter,
                    exit: this.props.durationExit + this.props.delayExit
                }}
                onEntered = {this.props.setIsNameDone}
                >
                <StyledLetter 
                    XOffsetEnter = {this.props.XOffsetEnter}
                    YOffsetEnter = {this.props.YOffsetEnter}
                    durationEnter = {this.props.durationEnter}
                    isGridDone = {this.props.isGridDone}
                >
                    {this.props.char}
                </StyledLetter>
            </CSSTransition>
        );
    }
}
export {Letter, StyledLetter}
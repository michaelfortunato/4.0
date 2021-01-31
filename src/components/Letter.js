import React from 'react'
import  styled  from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const StyledLetter = styled.span`
    position: relative;
    display:inline-block;

    transform: translate(${(props) => props.XOffsetIn}vw, ${(props) => props.YOffsetIn}vh); 

    &.letter-appear, &.letter-enter{
        transform: translate(${(props) => props.XOffsetIn}vw, ${(props) => props.YOffsetIn}vh); 
    }
    
    &.letter-appear-active, &.letter-enter-active{

        transform: translate(0, 0);

        transition: all;
       
        transition-duration: ${(props) => props.durationIn}ms;
    
    }

    &.letter-appear-done, &.letter-enter-done{
         transform: translate(0, 0);
    
    }

    &.letter-exit {
        transform: translate(0,0);
    }
    &.letter-exit-active {
        transform: translate(${(props) => props.XOffsetOut}vw, ${(props) => props.YOffsetOut}vh);
        transition: all;
        transition-timing-function: cubic-bezier(0.36, 0, 0.66, -0.56);
        transition-duration: ${(props) => props.durationOut}ms;
        transition-delay: ${(props) => props.delayOut}ms;
    }
    &.letter-exit-done {
        transform: translate(${(props) => props.XOffsetOut}vw, ${(props) => props.YOffsetOut}vh);
    }

    
`;


class Letter extends React.Component {
    render() {
        return (
            <CSSTransition
                in = {(this.props.animateNameIn) && (this.props.routeMatch != null)}
                classNames = 'letter'
                timeout = {{
                    enter: this.props.durationIn,
                    exit: this.props.durationOut + this.props.delayOut
                }}
                onEntered = {this.props.setIsNameDone}
                >
                <StyledLetter 
                    XOffsetIn = {this.props.XOffsetIn}
                    YOffsetIn = {this.props.YOffsetIn}
                    durationIn = {this.props.durationIn}
                    XOffsetOut = {this.props.XOffsetOut}
                    YOffsetOut = {this.props.YOffsetOut}
                    durationOut = {this.props.durationOut}
                    delayOut = {this.props.delayOut}
                    isGridDone = {this.props.isGridDone}
                >
                    {this.props.char}
                </StyledLetter>
            </CSSTransition>
        );
    }
}
export {Letter, StyledLetter}
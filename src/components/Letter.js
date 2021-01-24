import React from 'react'
import  styled  from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const StyledLetter = styled.span`
    position: relative;
    display:inline-block;

    transform: translate(${(props) => props.XOffset}vw, ${(props) => props.YOffset}vh); 

    &.letter-appear, &.letter-enter{
        transform: translate(${(props) => props.XOffset}vw, ${(props) => props.YOffset}vh); 
    }
    
    &.letter-appear-active, &.letter-enter-active{

        transform: translate(0, 0);

        transition: all;
       
        transition-duration: ${(props) => props.duration}ms;
    
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
                timeout = {this.props.duration}
                onEntered = {this.props.setIsNameDone}
                >
                <StyledLetter 
                    XOffset = {this.props.XOffset}
                    YOffset = {this.props.YOffset}
                    duration = {this.props.duration}
                    isGridDone = {this.props.isGridDone}
                >
                    {this.props.char}
                </StyledLetter>
            </CSSTransition>
        );
    }
}
export {Letter, StyledLetter}
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


const Letter = (props) => {
    return (
        <CSSTransition
            in = {props.isGridDone}
            classNames = 'letter'
            timeout = {props.duration}>
            <StyledLetter 
                XOffset = {props.XOffset}
                YOffset = {props.YOffset}
                duration = {props.duration}
                isGridDone = {props.isGridDone}
            >
                {props.char}
            </StyledLetter>
        </CSSTransition>
    );
}
export {Letter, StyledLetter}
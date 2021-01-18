import React from 'react'
import  styled  from 'styled-components';
import { CSSTransition } from 'react-transition-group'
import Gridline from './Gridline.js';

const StyledGrid = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow:hidden;

    &.fade-out-appear, &.fade-out-enter{
        opacity: 1;
    }
    &.fade-out-appear-active, &.fade-out-enter-active{
        opacity: 0;
        transition: opacity;
        transition-duration: ${(props) => props.duration}ms;
        transition-delay: ${(props) => props.delay}ms;
    }
    &.fade-out-appear-done, &.fade-out-enter-done{
        opacity: 0;
    }


`

const defaultGridProps = {
    random: true,
    numLines: 12,
    offset: 0,
    avgDuration: 200,
    avgDelay: 3500,
    duration: 1500,
    delay: 6500,
    isDot: true,
};

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.spacing = Math.floor(100/this.props.numLines);
    }
    position(i) {
        let fixedPos = this.props.offset + this.spacing * i;
        let floatingPos = 100 * (this.props.random ? Math.random(): 0);
        return {fixedPos: fixedPos, floatingPos: floatingPos};
    }
    timing (avgDuration, avgDelay, random) {
        let duration = MIN_DURATION + this.props.avgDuration * (this.props/random ?  Math.random() : 1);
        let delay = MIN_DELAY + this.props.avgDelay * (this.props.random ?  Math.random() : 1); //avgDelay + 200 * randn_bm(); 
        return {duration: duration, delay, delay};
    }
    configuration(i) {
        let pos_conf = pos_conf = this.position(i);
        let time_conf = this.timing();
        return {...pos_conf, ...time_conf, isDot: true}
    }
    setRowLines() {
        let numRowLines = props.numLines;
        for (let i = 1; i <= numRowLines; i++) {
            let conf = this.configuration(i)
            this.rowLines.push(<Gridline key = {i} IsRow = {true} {...conf} />);
        } 
    }
    setColLines() {
        let numColLines = this.w/this.h * props.numLines + 1;
        for (let i = 1; i <= numColLines; i++) {
            let conf = this.configuration(i);
            this.colLines.push(<Gridline key = {i + props.numLines} IsRow = {false} {...conf} />)
        }
    }
    render() {
        return (   
        <CSSTransition
            appear = {true}
            in = {true}
            timeout = {totalTimeout}
            classNames = 'fade-out'
            >
            <StyledGrid duration = {props.duration} delay = {props.delay}> 
                {this.rowLines} 
                {this.colLines} 
            </StyledGrid> 
        </CSSTransition>);
    }
}

export default Grid;
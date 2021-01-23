import React from 'react'
import  styled  from 'styled-components';
import { CSSTransition } from 'react-transition-group'
import Gridline from './Gridline.js';


const MIN_DURATION = 250;
const MIN_DELAY = 400;

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

class Grid extends React.Component {
    static defaultProps = {
        random: true,
        numLines: 12,
        offset: 0,
        avgDuration: 190,
        avgDelay: 1500,
        duration: 750,
        isDot: true,
    }
    constructor(props) {
        super(props);
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.numRowLines = this.props.numLines;
        this.numColLines = Math.floor(this.w/this.h * this.props.numLines + 1);
        
        this.totalGridlineEnterTime = 0;
        this.spacing = Math.floor(100/this.props.numLines);
        this.rowLines = [];
        this.colLines = [];
        this.state = {rowLinesState: [], colLinesState: []}; //{areFinished : new Array(this.props.numLines)};
        
        this.setRowLines();
        this.setColLines();
    }
    position(i) {
        let fixedPos = this.props.offset + this.spacing * i;
        let floatingPos = 100 * (this.props.random ? Math.random(): 0);
        return {fixedPos: fixedPos, floatingPos: floatingPos};
    }
    timing (avgDuration, avgDelay, random) {
        let duration = MIN_DURATION + this.props.avgDuration * (this.props/random ?  Math.random() : 1);
        let delay = MIN_DELAY + this.props.avgDelay * (this.props.random ?  Math.random() : 1); //avgDelay + 200 * randn_bm(); 
        return {duration: duration, delay : delay};
    }
    configuration(i) {
        let pos_conf  = this.position(i);
        let time_conf = this.timing();
        return {...pos_conf, ...time_conf, isDot: true}
    }
    setRowLines() {
        for (let i = 1; i <= this.numRowLines; i++) {
            let conf = this.configuration(i);
            this.totalGridlineEnterTime = Math.max(conf.duration + conf.delay, this.totalGridlineEnterTime);
            this.rowLines.push(<Gridline key = {i} isRow = {true} {...conf} />);
        } 
    }
    setColLines() {
        for (let i = 1; i <= this.numColLines; i++) {
            let conf = this.configuration(i);
            this.totalGridlineEnterTime = Math.max(conf.duration + conf.delay, this.totalGridlineEnterTime);
            this.colLines.push(<Gridline key = {i + this.props.numLines} isRow = {false} {...conf} />)
        }
    }
    render() {
        this.totalGridlineEnterTime = this.totalGridlineEnterTime + 250;
        return (   
        <CSSTransition
            appear = {true}
            in = {true}
            timeout = {this.props.duration + this.totalGridlineEnterTime}
            onEntered = {this.props.setIsGridDone}
            classNames = 'fade-out'
            >
            <StyledGrid duration = {this.props.duration} delay = {this.totalGridlineEnterTime}> 
                {this.rowLines} 
                {this.colLines} 
            </StyledGrid> 
        </CSSTransition>);
    }
}

export default Grid;
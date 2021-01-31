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

    &.fade-out-exit{
        opacity: 1;
    }
    &.fade-out-exit-active {
        opacity: 0;
        transition: opacity;
        transition-duration: ${(props) => props.duration}ms;
        transition-delay: ${(props) => props.delay}ms;
    }
    &.fade-out-exit-done{
        opacity: 0;
    }


`

class Grid extends React.Component {
    static defaultProps = {
        random: true,
        numLines: 12,
        offset: 0,
        avgDuration: 150,
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
        
        this.setRowLines();
        this.setColLines();
    }
    componentDidMount()
    {
        let offset = 250
        setTimeout(this.props.setAnimateNameIn, this.totalGridlineEnterTime - offset)
    }
    position(i) {
        let fixedPos = this.props.offset + this.spacing * i;
        let floatingPos = 100 * (this.props.random ? Math.random(): 0);
        return {fixedPos: fixedPos, floatingPos: floatingPos};
    }
    timing (avgDuration, avgDelay, random) {
        let duration = MIN_DURATION + this.props.avgDuration * (false ?  Math.random() : 1);
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
        return (   
        <CSSTransition
            in = {this.props.animateNameIn == false || this.props.isNameDone == false}
            timeout = {this.props.duration}
            classNames = 'fade-out'
            onExited = {this.props.setIsGridDone}
            unmountOnExit 
            >
            <StyledGrid duration = {this.props.duration} > 
                {this.rowLines} 
                {this.colLines} 
            </StyledGrid> 
        </CSSTransition>);
    }
}

export default Grid;
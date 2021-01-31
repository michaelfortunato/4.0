import React from 'react'
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { Letter, StyledLetter } from './Letter.js'


const StyledName = styled.div`
    font-family: Helvetica, Arial, sans-serif;
    font-size: 56px;
    overflow: visible;
    display: flex;
    justify-content: center;
    position: relative;
    color: #264653;
    padding-top: 2%;
    margin-bottom: 0px;
}

`;


class Name extends React.Component {
    constructor(props) {
        super(props);
        this.firstNameConfigs = this.buildConfigs(this.props.firstName, 0);
        this.middleNameConfigs = this.buildConfigs(this.props.middleName, 7);
        this.lastNameConfigs = this.buildConfigs(this.props.lastName,7);
    }
    buildConfigs(name, identifier) {
        let configsList= [];
        let config = {};
        let letters = name.split('');
        configsList = letters.map((char, index) => {
            config = this.configSetup(char, index);
            return config;
        });
        return configsList;
    }
    configSetup(char, index) {
        let config = {}
        config.char = char;
        config.XOffsetIn = this.randomArcPoint(38).x; //((index % 2) == 0) ? 25 : -25;
        config.YOffsetIn = this.randomArcPoint(38).y;// ((index % 2) == 0) ? -75 : 75;
        config.durationIn = 500;

        config.XOffsetOut = 100
        config.YOffsetOut = this.uniform(-100,100)
        config.durationOut = 800 + Math.random() * 400 // in ms
        config.delayOut = 600 + Math.random() * 2000 // Staggered delay in ms
        return config
    }
    randomArcPoint(radius) {
        let theta = (2 * Math.random() * Math.PI);
        return ({ x: radius * Math.cos(theta), y: radius * Math.cos(theta) });
    }
    uniform(min, max) {
            return Math.random() * (max - min) + min;
    } 
    shouldComponentUpdate(nextProps, nextState) {
        if ( (nextProps.isNameDone == true) && (this.props.routeMatch != null)) {
            return false;
        } else {
            return true;
        }
    }
    render() {
        return (<StyledName>
            <div style={{ 'display': 'inline-block', 'marginRight': '10px' }}>
                {this.props.firstName.split('').map((char, index) => {
                    return (
                        <Letter 
                            key = {index} 
                            routeMatch = {this.props.routeMatch}
                            setIsNameDone = {this.props.setIsNameDone}
                            animateNameIn = {this.props.animateNameIn}
                            {...this.firstNameConfigs[index]}
                        />);
                })}
                </div>
            <div style={{ 'display': 'inline-block', 'marginLeft': '10px' }}>
            {this.props.lastName.split('').map((char, index) => {
                    return (
                        <Letter 
                            key = {index + 7}
                            routeMatch = {this.props.routeMatch} 
                            setIsNameDone = {this.props.setIsNameDone}
                            animateNameIn = {this.props.animateNameIn}
                            {...this.lastNameConfigs[index]}
                        />);
                })}
            </div>
        </StyledName>);
    }
}

export default Name;
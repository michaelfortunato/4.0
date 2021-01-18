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
        this.firstName = this.buildLettersFromName(this.props.firstName, 0);
        this.middleName = this.buildLettersFromName(this.props.middleName, 7);
        this.lastName = this.buildLettersFromName(this.props.lastName,7);
        console.log(this.lastName[0])
    }
    buildLettersFromName(name, identifier) {
        let config = {};
        let letters = name.split('');
        letters = letters.map((char, index) => {
            config = this.configSetup(char, index);
            return (<Letter key={index + identifier} {...config} isGridDone={this.props.isGridDone} />);
        });
        console.log(letters);
        return letters;
    }
    configSetup(char, index) {
        let config = {}
        config.char = char;
        config.XOffset = this.randomArcPoint(38).x; //((index % 2) == 0) ? 25 : -25;
        config.YOffset = this.randomArcPoint(38).y;// ((index % 2) == 0) ? -75 : 75;
        config.duration = 600;
        return config
    }
    randomArcPoint = (radius) => {
        let theta = (2 * Math.random() * Math.PI);
        return ({ x: radius * Math.cos(theta), y: radius * Math.cos(theta) });
    }
    render() {
        console.log(this.firstName[0].props.isGridDone)
        return (<StyledName>
            <div style={{ 'display': 'inline-block', 'marginRight': '10px' }}>
                {this.firstName}
            </div>
            <div style={{ 'display': 'inline-block', 'marginLeft': '10px' }}>
                {this.lastName}
            </div>
        </StyledName>);
    }
}

export default Name;
import React from 'react'
import { CSSTransition } from 'react-css-transition';
import  styled  from 'styled-components';
import { Letter, StyledLetter } from './Letter.js'





const randomArcPoint = (radius) => {
    let theta = (2 * Math.random() * Math.PI);
    return ({x: radius * Math.cos(theta), y: radius *Math.cos(theta) });
}



const configSetup = (char, index) => {
    let config = {}
    config.char = char;
    config.XOffset = randomArcPoint(38).x; //((index % 2) == 0) ? 25 : -25;
    config.YOffset = randomArcPoint(38).y;// ((index % 2) == 0) ? -75 : 75;
    config.duration = 400;
    config.delay = 5350;
    return config;
}

const StyledName = styled.div`
    font-family: Helvetica, Arial, sans-serif;
    font-size: 45px;
    overflow: visible;
    display: flex;
    justify-content: center;
    position: relative;
    color: #264653;
    margin-bottom: 20px;
}

`;

const Name = (props) => {
    let config = {};
    let firstName = props.firstName.split('');
    let middleName = props.middleName.split('');
    let lastName = props.lastName.split('');


    firstName = firstName.map( (char, index) => {
        config = configSetup(char, index);
        return (<Letter key = {index} {...config}/>
        );
    });


    middleName = middleName.map( (char, index) => {
        config = configSetup(char, index);
        return (<Letter key = {index + 7} {...config}/>
        );
    });

    lastName = lastName.map( (char, index) => {
        config = configSetup(char, index);
        return (<Letter key = {index + 16} {...config}/>
        );
    });



        return(
            
            <StyledName>
               
                <div style = {{'display': 'inline-block', 'margin-right': '10px'}}>
                {firstName}      
                </div>  
                <div style = {{'display': 'inline-block', 'margin-left': '10px', 'margin-right': '10px'}}>
                {middleName}      
                </div>  
          
                <div style = {{'display': 'inline-block', 'margin-left': '10px'}}>
                {lastName}
                </div>
             
            </StyledName>);


}

export default Name;
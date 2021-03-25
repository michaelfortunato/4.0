import React from 'react'
import styled from 'styled-components'


const StyledText = styled.div`
    position: absolute;
    
    left: ${(props)=> props.xPos}%;
    top: ${(props) => props.yPos}%;
    width: 25%;
    height: 15%;
    color: white;
    font-size: 2.2em;
    font-family: 'Lato', sans-serif;
`

class FloatingText extends React.Component {
    render() {
        return (
            <StyledText {...this.props}>
                <p> {this.props.description[0]} </p>
                <p> {this.props.description[1]} </p>
            </StyledText>
        )
    }
}

export default FloatingText;
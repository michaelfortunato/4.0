import React from 'react'
import styled from 'styled-components'
import Roll from 'react-reveal/Roll'


const StyledText = styled.div`
    position: relative;
    text-align: center;
    
    left: ${(props) => props.xPos}%;
    top: ${(props) => props.yPos}%;
   
    color: white;
    font-size: 2.2em;
    font-family: 'Lato', sans-serif;
`

class FloatingText extends React.Component {
    render() {
        return (
            <Roll>
                <StyledText {...this.props}>
                    {this.props.text.map((desc) =><p> {desc} </p>)}

                </StyledText></Roll>
        )
    }
}

export default FloatingText;
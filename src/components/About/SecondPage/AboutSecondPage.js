import React from 'react'
import styled from 'styled-components'
import FloatingText from './FloatingText.js'
import textDescription from '../../../Data/text-content.json'
import ScrollAnimation from 'react-animate-on-scroll'
import '../../../css/About.css'

const StyledPage = styled.div`

    position: relative;
    padding: 0;
    border: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
`

class AboutSecondPage extends React.Component 
{
    render() {
        let descriptions = textDescription.About.pages[1].descriptions
        return <StyledPage>
            {descriptions.map( ({paragraphs}) => 
              
                 <FloatingText xPos = {0} yPos ={0} description = {paragraphs}/>
            )}
        </StyledPage>
    }
}

export default AboutSecondPage

import React from 'react'
import styled from 'styled-components'

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
        return <StyledPage>
            <div>
                <p>
                    My Life is not particularly intesesting
                    </p>
            </div>
        </StyledPage>
    }
}

export default AboutSecondPage

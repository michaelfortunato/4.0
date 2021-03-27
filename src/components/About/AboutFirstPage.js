import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../data.json'
import styled from 'styled-components'


const StyledPage = styled.div`
    position: absolute    
    width: 100vw;
    height: 100vh;
`


class AboutFirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.lottieRef = React.createRef()
    }
    render() {
        if (this.props.doPlay) {this.lottieRef.current.play()}
        return (
            <StyledPage>
            <Lottie
                lottieRef={this.lottieRef} loop={false} autoplay={false} animationData={animationData}
                style={{ 'position': 'relative', 'top': '10%', 'height': '90%', 'width': '100%' }}
            />
            </StyledPage>
        );
    }

}

export default AboutFirstPage;



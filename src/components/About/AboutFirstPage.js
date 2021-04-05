import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../data.json'
import styled from 'styled-components'


const StyledPage = styled.div`
    width: 100vw;
    height: 100vh;
`


class AboutFirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.lottieRef = React.createRef()
    }
    componentDidMount() {
       /* console.log(this.lottieRef)
        if (this.props.doPlay) {
            this.lottieRef.current.play()
        }*/
    }
    componentDidUpdate() {
        /*
        if (this.props.doPlay) {
            this.lottieRef.current.play()
        }*/
    }
    render() {
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



import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import '../css/index.css'
const StyledAbout = styled.div`
    background: purple;
    width: 100%;
    height: 100%; 
    position: absolute;
`;
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fromLocation: "/"
        }
    }
    componentDidUpdate() {
        if (this.props.location != this.state.fromLocation) {
            this.setState({ fromLocation: this.props.location})
        }
    }
    render() {
        if ( (this.state.fromLocation == "/") && (this.props.location == "/about") ) {
            console.log("Implement wait timer");
        }
        return (
            <CSSTransition
                classNames="fade"
                in={this.props.location == '/about'}
                timeout={1000}
                unmountOnExit
            >
                <StyledAbout>
                    <p>s</p>
                </StyledAbout>
            </CSSTransition>);
    }
}
export default About
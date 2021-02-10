import React from 'react';
import Description from './Description.js';
import Name from './Name.js';
import styled from 'styled-components';

const StyledBanner = styled.div`
    position: relative;
    top: 16%;

`;
class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isNameDone: false }
        this.setIsNameDone = this.setIsNameDone.bind(this); //The line behind will bind the "this" keyword to an object of this class, rather than an object of the child class.
    }
    setIsNameDone() {
        this.setState({ isNameDone: true });
    }
    
    render() {
        return (
            <div className='row hero'>
                <div className='col l3 s0 ' />
                <StyledBanner className='col l6 s12'>
                    <Name firstName='Michael' middleName='Newman' lastName='Fortunato' isNameDone = {this.state.isNameDone} setIsNameDone={this.setIsNameDone} isGridDone={this.props.isGridDone} routeMatch = {this.props.routeMatch}/>
                    {this.state.isNameDone ? <Description /> : null}
                </StyledBanner>
                <div className='col l3 s0' />
            </div>
        );
    }
}


export default Hero;
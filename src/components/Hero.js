import React from 'react';
import Description from './Description.js';
import Name from './Name.js';
import styled from 'styled-components';

const StyledBanner = styled.div`
    position: relative;
    top: 12%;

`;
class Hero extends React.Component {
    render() {
        return (
            <div className='row hero'>
                <div className='col l3 s0 ' />
                <StyledBanner className='col l6 s12'>
                    <Name firstName='Michael' 
                            middleName='Newman' 
                            lastName='Fortunato' 
                            animateNameIn = {this.props.animateNameIn}
                            isNameDone = {this.props.isNameDone} 
                            setIsNameDone={this.props.setIsNameDone} 
                            routeMatch = {this.props.routeMatch}/>
                    {this.props.isNameDone ? <Description /> : null}
                </StyledBanner>
                <div className='col l3 s0' />
            </div>
        );
    }
}


export default Hero;
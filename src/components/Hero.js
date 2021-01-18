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
            <Name isGridDone = {this.props.isGridDone} firstName='Michael' middleName='Newman' lastName='Fortunato' />
           <Description />
        </StyledBanner>
        <div className='col l3 s0' />
    </div>
        );
    }
}


export default Hero;
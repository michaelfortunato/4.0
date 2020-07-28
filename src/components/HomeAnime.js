import React, { useState }from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Grid from './Grid.js';
import  Hero from './Hero.js';
import Name from './Name.js';
import Triangle from './Triangle.js';
import Description from './Description.js';


const defaultGridProps = {
    random: true,
    numLines: 10,
    offset: 0,
    avgDuration: 200,
    avgDelay: 3000,
    duration: 1500,
    delay: 5600,
    isDot: true,
};

const StyledBanner = styled.div`
    position: relative;
    top: 14%;

`;

const HomeAnime = (props) => {



    return(
        <div >
            <Grid  {...defaultGridProps} />
            <div className = 'row hero'>
                    <div className = 'col l3 s0'>dfd</div>
                    <StyledBanner className = 'col l6 s12'>
                        <Name firstName = 'Michael' middleName = 'Newman' lastName = 'Fortunato'/>
                        <Description />
                    </StyledBanner>
                    <div className = 'col l3 s0'></div>
            </div>

        </div>
        );
}

export default HomeAnime;
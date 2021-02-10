import React , { useState }  from 'react'
import styled from 'styled-components'
import NavContent from './NavContent.js';
import Navbutton from './Navbutton.js';


const StyledNavbar = styled.div`
    width: 100%;
    height: 25%;
    font-size: 5px;
    position: absolute;

`;



const Navbar = (props) => {
    const [ isVisible, setIsVisible ] = useState(false);
    return(
        <StyledNavbar>
            <Navbutton  isVisible = {isVisible} setIsVisible =  {setIsVisible} />
            <NavContent isVisible = {isVisible} setIsVisible =  {setIsVisible} />
        </StyledNavbar>
    );
}

export default Navbar;
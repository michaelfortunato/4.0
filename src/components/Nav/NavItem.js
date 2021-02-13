import React from 'react'
import { Link }  from "react-router-dom"; 
import styled from 'styled-components';

const StyledNavItem = styled.div`    
    position: relative;
    top: 25%;
    color: white;
    font-size: 2em;
    font-family: 'Lato', sans-serif;
`;
class NavItem extends React.Component {
 render() {
    let materialUIGridClass = "col s1"
    if (this.props.isFirst) {
        materialUIGridClass = materialUIGridClass + " offset-s8";
    }
    return (
            <StyledNavItem className = {materialUIGridClass} >
                <Link to= {this.props.URL} style = {{"color": "white"}} className="center-align">{this.props.text}</Link>
            </StyledNavItem>
        );
    }
}

export default NavItem;
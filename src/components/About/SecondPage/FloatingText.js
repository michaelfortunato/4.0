import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Roll from 'react-reveal/Roll'


const StyledText = styled.div`
    position: relative;
    text-align: center;
    
    left: ${(props) => props.xPos}%;
    top: ${(props) => props.yPos}%;
   
    color: white;
    font-size: 2.2em;
    font-family: 'Lato', sans-serif;
`
function FloatingText(props) {
    // Thanks to https://www.youtube.com/watch?v=Q5y6pwoE3cM&t=83s for the tutorial on this!
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
        console.log(window.pageYOffset);
        return setOffsetY(window.pageYOffset);
    }
    useEffect(() => {
      window.addEventListener("scroll", handleScroll, true);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const render = () => {
        return (
            <Roll>
                <StyledText {...props}>
                    {props.text.map((desc) =><p> {`${desc} ${offsetY}`} </p>)}

                </StyledText></Roll>
        )
 
    }

    return render();
}

export default FloatingText;
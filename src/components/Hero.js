import React from 'react'
import Name from './Name.js'
import Triangle from './Triangle.js'
import Description from './Description.js'


const Hero = (props) => {
    return(

            <div className = 'hero row '>
                    <Triangle />
                    <div className = 'col s6'>
                        <Name firstName = 'Michael Newman' lastName = 'Fortunato'/>
                        <Description delay = {0}/>
                        <Description desc = {"we"} delay = {2000}/>
                    </div>
                    <Triangle />
                </div>
    );
}

export default Hero;
import React from 'react'
import styled from 'styled-components'
import FloatingText from './FloatingText.js'
import Grid from '@material-ui/core/Grid'
import '../../../css/About.css'


const StyledPage = styled.div`

    position: relative;
    padding: 0;
    border: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
`
const config = {
    "title": "About Page 2",

    "descriptions": [
        {
            "paragraphs": [
                "I am a Software Engineer working in Cambridge, Mass.",
                "I graduated with a b.s. in pure math in 2020"
            ],
            "gridConfig": {
                "xs": "12",
                "lg": "6"
            }
        },
        {
            "paragraphs": [
                "I enjoy listening to all kinds of music,",
                "... jazz and rap especially",
                "soldering electronics",
                "coding physics simulations and gans,",
                "and hiking"
            ],
            "gridConfig": {
                "xs": "12",
                "lg": "6"
            }
        },
        {
            "paragraphs": [
                "Because it induces boredom,",
                "I talk about that below"
            ]
        }
    ],
    "bottomDesc": {}
};
class AboutSecondPage extends React.Component {

    bannerDescriptions() {
        let descriptions = config.descriptions
        return (<React.Fragment><Grid item xs={12} lg={6}>
            <FloatingText text={descriptions[0].paragraphs} xPos={0} yPos={0} />
        </Grid>
            <Grid container item justify='flex-end' xs={12}>
                <Grid item xs={12} lg={6}>
                    <FloatingText text={descriptions[1].paragraphs} xPos={0} yPos={0} />
                </Grid>
            </Grid></React.Fragment>
        );
    }
    footerDescription() {
        let descriptions = config.descriptions
        return (
            <Grid item xs={9}>
                <FloatingText text={descriptions[2].paragraphs} xPos={0} yPos={0} />
            </Grid>);

    }

    render() {
        let descriptions = config.descriptions
        return (<StyledPage>
            <Grid style={{ 'height': '100%', 'width': '100%' }} container spacing={4} alignItems='center'>
                <Grid container item style={{ 'height': '50%', 'width': '100%' }} xs={12} alignItems='center'>
                    {this.bannerDescriptions()}
                </Grid>
                <Grid container style={{ 'height': '75%' }} item xs={12} justify='center' alignItems='center'>
                    {this.footerDescription()}
                </Grid>
            </Grid>
        </StyledPage >)
    }
}

export default AboutSecondPage

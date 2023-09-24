import React from 'react';
import styled from 'styled-components';
import ECam from '../images/ECam.png'


const AboutHeader = styled.h2`
    text-align:center;
    font-family: roboto;
    font-size: 75px;
`
const AboutSubHeading = styled.h3`
    text-align:center;
    font-family: roboto;
    font-size: 40px;
`

const AboutSubSubHeading = styled.h4`
    text-align:center;
    font-family: roboto;
    font-size: 30px;
`

const Paragraph = styled.p`
    text-align:center;
    font-family: roboto;
    font-size: 20px;
`

const ImageContainer = styled.body`
    align-self:center;
    display:flex;
    height:50vh;
    width:100vw;
    justify-content:center;
`

const About = () => {
    return ( 
        <div className='body'>
            <AboutHeader>About Me</AboutHeader>
            <ImageContainer>
                <img src={ECam}/>
            </ImageContainer>

            <AboutSubSubHeading>A small introduction about myself</AboutSubSubHeading>

            <AboutSubHeading>Emma Cameron</AboutSubHeading>

            <AboutSubSubHeading>Junior Software Engingeer</AboutSubSubHeading>

            <Paragraph>
                After working in IT Customer Support for a number of years, I wanted to take the leap to learn code; I wanted to go from listening to users problems and experiences using the product to fixing pre-existing applications and creating new applications.
                
            </Paragraph>
        </div>
     );
}
 
export default About;
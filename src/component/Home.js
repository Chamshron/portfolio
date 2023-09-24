import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import JavaScriptIcon from '@mui/icons-material/Javascript'
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Body = styled.body`
    text-align:center;
    background-color: #FFF5E0;
    gap: 4em;
`
const Ptag = styled.p`
    color: #141E46;
    font-size: 50px;
    text-align:2em;
`
const WelcomeTitle = styled.h1`
    text-align:center;
    font-family: roboto;
    font-size: 75px;
`

const Home = () => {
    return ( 
        <Body className='welcome-body'>
                
                <WelcomeTitle>Hi, my name is Emma Cameron</WelcomeTitle>
                
                <Ptag>
                    I am a junior software engineer with a background in Customer Support.
                </Ptag>
                <div>
                    <JavaScriptIcon/>
                    <CssIcon/>
                    <HtmlIcon/>

                </div>
                <div>
                <LinkedInIcon/>
                <GitHubIcon/>
                <EmailIcon/>
                </div>

                
        </Body>
     );
}
 
export default Home;
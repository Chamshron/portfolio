import React from 'react';
import styled from 'styled-components';

const About = styled.p`
    grid-row-start:2;
    justify-content: center;
    display: flex;
`
const Body = styled.body`
    display: grid;
    grid-template-columns:40% 1fr 1fr;
    grid-template-rows: 40% 1fr 1fr;
    background-color: #FFF5E0;
    gap: 4em;
`

const Ptag = styled.p`
    color: #141E46;
    font-size: 2em;
    font-weight: bold;
    flex-wrap:wrap;
    align-content: stretch;
`

const Home = () => {
    return ( 
        <Body>
            <About>
                <Ptag>
                Hello there!
                <br></br>
                Thanks for taking the time to check out my portfolio.
                <br></br>
                You'll find more information about me in the 'About' section, as well as some example projects I've worked on in the 'Portfolio' section.
                <br></br>
                Feel free to take a look around!
                </Ptag>
            </About>
        </Body>
     );
}
 
export default Home;
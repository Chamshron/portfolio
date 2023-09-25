import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return ( 
        <div className='footer'>
            <div>
                {""}

                <a href='https://www.linkedin.com/in/emma-cameron-%E8%8C%83%E6%81%A9%E8%8C%97%EF%BC%89-54b671192/'><LinkedInIcon/></a>
                <a href='https://github.com/Chamsron?tab=repositories'><GitHubIcon/></a>
                <a href='mailto:emmacameron219@gmail.com'><EmailIcon/></a>
                {""}
            </div>
            <p>&copy; 2023 chamsron.github.io</p>
        </div>
     );
}
 
export default Footer;
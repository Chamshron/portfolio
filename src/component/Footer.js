import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return ( 
        <div className='footer'>
            <div>
                {""}
                <LinkedInIcon/>
                <GitHubIcon/>
                <EmailIcon/>
                {""}
            </div>
            <p>&copy; 2023 chamsron.github.io</p>
        </div>
     );
}
 
export default Footer;
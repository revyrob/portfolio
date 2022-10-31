import * as React from 'react';
import './NavBar.scss';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
  
  return (
    <section className='navBar'>
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       <Avatar src="../../assets/images/kayle.jpg" alt="kayle robson"/>
       
        <Typography sx={{ minWidth: 100 }}>About</Typography>
        <Typography sx={{ minWidth: 100 }}>Projects</Typography>
      </Box>
    </React.Fragment>
    </section>
  );
}

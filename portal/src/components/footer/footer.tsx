// components/Footer.tsx
import React from 'react';
import { Grid, Typography, Box, Container, Link } from '@mui/material';
// import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import { FooterData } from './types';

const Footer: React.FC<{ data: FooterData }> = ({ data }) => {
  return (
    <Box sx={{ width: "100%", height: "auto",  paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: '#1a1a1a', padding: '20px', color: '#ffffff',  position: 'fixed',
      bottom: 0, justifyContent: 'space-between' }}>
     <Container maxWidth="xl">
      <Grid container direction="row">

        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
            {/* {data.title1} */}
            Contact
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
            {/* {data.address} */}
            1234 Elm Street
            Springfield, IL 62704 
            USA
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
            +1(805)606-1110
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
            SLD30.PA.WOrkflow@us.af.mil
          </Typography>


        </Grid>

        
        <Grid item xs={12} sm={3}>

          <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
            Hours of Operations
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
          Mon-Fri: 6am-6pm
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
          Sat: 8am-4pm
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
          Sun: 10am-4pm
          </Typography>
          
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
          Holiday Closures: Thanksgiving Day and Christmas Day
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
          After Hour Passes: Visitors needing a visitor pass after hours can receive a 24 hour pass at the Santa Maria gate, (located on California Bivd. at the intersection with HWY1)
          </Typography>

        </Grid>
        

      
        <Grid item xs={12} sm={3}>

          <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
          Got feedback?
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
          For any feedback or suggestions, please reach out to us at: feedback@guardianone.us Your insights help us improve!
          </Typography>

        </Grid>


   
        <Grid item xs={12} sm={3}>

          <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
          Got Connected
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
          {/* <Link href="#" color="inherit">
              <Facebook />
            </Link>
            <Link href="#" color="inherit">
              <Twitter />
            </Link>
            <Link href="#" color="inherit">
              <Instagram />
            </Link>
            <Link href="#" color="inherit">
              <YouTube />
            </Link> */}
          </Box>

        </Grid>

      </Grid>
     </Container>
    </Box>
  );
};

export default Footer;

// components/Footer.tsx
import React from 'react';
import { Grid, Typography, Box, Container, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import { FooterData } from './types';

const Footer: React.FC<{ data: FooterData }> = ({ data }) => {
  return (
    <Box sx={{ width: "100%", height: "auto",  paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: '#1a1a1a', padding: '20px', color: '#ffffff',  position: 'fixed',
      bottom: 0, justifyContent: 'space-between' }}>
      <Grid container rowSpacing={1} direction="row">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
            {/* {data.title1} */}
            Contact
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            {/* {data.address} */}
            1234 Elm Street
            Springfield, IL 62704 
            USA
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            +1(805)606-1110
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            SLD30.PA.WOrkflow@us.af.mil
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
            Hours of Operations
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
          Mon-Fri: 6am-6pm
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
          Sat: 8am-4pm
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
          Sun: 10am-4pm
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
          Holiday Closures: Thanksgiving Day and Christmas Day
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
          After Hour Passes: Visitors needing a visitor pass after hours can receive a 24 hour pass at the Santa Maria gate, (located on California Bivd. at the intersection with HWY1)
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
          Got feedback?
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
          For any feedback or suggestions, please reach out to us at: feedback@guardianone.us Your insights help us improve!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
          Got Connected
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
          <Link href="#" color="inherit">
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
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

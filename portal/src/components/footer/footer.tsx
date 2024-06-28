// components/Footer.tsx
import React from 'react';
import { Grid, Typography, Box, Container, Link } from '@mui/material';
import { Facebook, X, Instagram, YouTube } from '@mui/icons-material';
import { FooterData } from './types';

const Footer: React.FC<{ data: FooterData }> = ({ data }) => {
  return (
    <Box sx={{ width: "100%", height: "auto",  paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: '#1a1a1a', padding: '20px', color: '#ffffff',  position: 'fixed',
      bottom: 0, justifyContent: 'space-between' }}>
      <Grid container rowSpacing={1} direction="row">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
            {data.title1}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            {data.streetAddress}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            {data.cityState}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            {data.phone}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            {data.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
            {data.title2}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            {data.hoursMon}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            {data.hoursSat}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            {data.hoursSun}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            {data.hours2}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            {data.hours3}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
          {data.title3}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
          {data.feedback}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
          {data.title4}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
          <Link href={data.linkFb} color="inherit">
              <Facebook />
            </Link>
            <Link href={data.linkX} color="inherit">
              <X />
            </Link>
            <Link href={data.linkIG} color="inherit">
              <Instagram />
            </Link>
            <Link href={data.linkYT} color="inherit">
              <YouTube />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

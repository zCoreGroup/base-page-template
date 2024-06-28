// components/Footer.tsx
import React from 'react';
import { Grid, Typography, Box, Link } from '@mui/material';
import { Facebook, X, Instagram, YouTube } from '@mui/icons-material';
import { FooterData } from './types';

const Footer: React.FC<{ data: FooterData }> = ({ data }) => {
  return (
    <Box sx={{ width: "100%", height: "auto",  paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: '#1a1a1a', padding: '20px', color: '#ffffff',  position: 'fixed',
      bottom: 0, display: "flex", justifyContent: "center", alignItems: "center",
       }}>
      <Grid container spacing={4} direction="row" justifyContent="center"
        alignItems="center" sx={{ width: '90%', maxWidth: '1800px' }}>

        
        <Grid item xs={12} sm={6} md={3}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" height="100%">
          <Typography variant="h6" gutterBottom sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
            {data.title1}
          </Typography>

          <Typography variant="body2" flexGrow={1} sx={{ fontSize: '12px', mb:1 }}>
            {data.streetAddress}
          </Typography>
          <Typography variant="body2" flexGrow={1} sx={{ fontSize: '12px' }}>
            {data.cityState}
          </Typography><br/>
           <Link href={data.phone} color="inherit" underline="none">
           <Typography variant="body2" flexGrow={1} sx={{ fontSize: '12px', mb: 1}}>{data.phone1}</Typography>
           </Link>
            <Link href={data.email} color="inherit" underline="none">
            <Typography variant="body2" flexGrow={1} sx={{ fontSize: '12px'}}>{data.email1}</Typography>
            </Link>
            </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" height="100%">
          <Typography variant="h6" gutterBottom sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px'}}>
            {data.title2}
          </Typography>
          
          <Typography variant="body2" flexGrow={1} sx={{ fontSize: '12px' }}>
            {data.hoursMon}
          </Typography>
          <Typography variant="body2" flexGrow={1} sx={{ fontSize: '12px' }}>
            {data.hoursSat}
          </Typography>
          <Typography variant="body2" flexGrow={1} sx={{ fontSize: '12px', mb:1 }}>
            {data.hoursSun}
          </Typography>
          <Typography variant="body2" flexGrow={1} sx={{ fontSize: '12px', mb: .5 }}>
            {data.hours2}
          </Typography>
          <Typography variant="body2" flexGrow={1} sx={{ fontSize: '12px' }}>
            {data.hours3}
          </Typography>
   </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" height="100%">
          <Typography variant="h6" gutterBottom sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
          {data.title3}
          </Typography>
       
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
          {data.feedback}
          </Typography>
</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" height="100%">
          <Typography variant="h6" gutterBottom sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px'}}>
          {data.title4}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
          <Link href={data.linkFB} target="_blank" color="inherit">
              <Facebook />
            </Link>
            <Link href={data.linkX} target="_blank" color="inherit">
              <X />
            </Link>
            <Link href={data.linkIG} target="_blank" color="inherit">
              <Instagram />
            </Link>
            <Link href={data.linkYT} target="_blank" color="inherit">
              <YouTube />
            </Link>
</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

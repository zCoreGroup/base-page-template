import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { BannerData } from "@/types";
import { 
  bannerSubFieldBox, 
  bannerSubFieldText, 
  bannerSubFieldTitle, 
  bannerTitle, 
  tagLine, 
  logo, 
  subFields} 
from './styles';

const Banner: React.FC<{ data: BannerData }> = ({ data }) => {
  return (
    <Box sx={{ padding: '20px', color: '#ffffff' }}>
      <Grid container alignItems="center">
        <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box component="img" src={data.logoSrc} alt={data.logoAlt} sx={logo} />
          <Box sx={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
            <Typography variant="h4" sx={bannerTitle}>
              {data.title}
            </Typography>
            <Typography variant="subtitle1" sx={tagLine}>
              {data.tagline}
            </Typography>
          </Box>
        </Grid>


        <Grid item xs={12} md={4} sx={subFields}>
          <Box sx={{ ...bannerSubFieldBox, marginRight: { sm: 4, xs: 0 }, marginBottom: { xs: 2, sm: 0 } }}>
            <Typography variant="h6" sx={bannerSubFieldTitle}>
              Our Mission
            </Typography>
            <Typography variant="body2" sx={bannerSubFieldText}>
              {data.missionText}
            </Typography>
          </Box>
          <Box sx={bannerSubFieldBox}>
            <Typography variant="h6" sx={bannerSubFieldTitle}>
              Our Vision
            </Typography>
            <Typography variant="body2" sx={bannerSubFieldText}>
              {data.visionText}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;

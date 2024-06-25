// components/Header.tsx
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { HeaderData } from './types';

const Header: React.FC<{ data: HeaderData }> = ({ data }) => {
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', padding: '20px', color: '#ffffff' }}>
      <Grid container alignItems="center">
        <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box component="img" src={data.logoSrc} alt={data.logoAlt} sx={{ width: 80, marginRight: 2 }} />
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '28px' }}>
              {data.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#cccccc', fontSize: '16px' }}>
              {data.subtitle}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Box sx={{ maxWidth: '242px', paddingLeft: 2, marginRight: 4 }}>
              <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
                Our Mission
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '14px' }}>
                {data.missionText}
              </Typography>
            </Box>
            <Box sx={{ maxWidth: '242px', paddingLeft: 2 }}>
              <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '20px' }}>
                Our Vision
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '14px' }}>
                {data.visionText}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;

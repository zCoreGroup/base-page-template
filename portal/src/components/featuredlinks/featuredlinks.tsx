// components/FeaturedLinks.tsx
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { FeaturedLinksData } from './types';
import HexagonImageOverlay from '../hexagonimageoverlay/hexagonimageoverlay'

const FeaturedLinks: React.FC<{ data: FeaturedLinksData }> = ({ data }) => {
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', padding: '20px' }}>
      <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '28px' }}>
        Featured Links
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        {data.links.map((link, index) => (
          <Grid item xs={12} sm={6} md={2} lg={2} key={index}>
            <a href={link.url} style={{ color: 'inherit', textDecoration: 'none' }}>
              <Box sx={{ backgroundColor: '#1a1a1a', color: '#fff', borderRadius: '8px', overflow: 'hidden', textAlign: 'center' }}>
                <HexagonImageOverlay
                  imageUrl={link.imageUrl}
                  altText={link.name}
                />
                <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>
                  {link.name}
                </Typography>
              </Box>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedLinks;

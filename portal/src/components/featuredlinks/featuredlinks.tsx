// components/FeaturedLinks.tsx
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { FeaturedLinksData } from "@/types";
import HexagonImageLink from '../hexagonimagelink/hexagonimagelink';

const FeaturedLinks: React.FC<{ data: FeaturedLinksData }> = ({ data }) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h6" sx={{ color: '#e9542f', fontWeight: 'bold', fontSize: '28px' }}>
        Featured Links
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        {data.links.map((link, index) => (
          <Grid item xs={12} sm={6} md={2} lg={2} key={index}>
            <HexagonImageLink url={link.url} imageUrl={link.imageUrl} name={link.name}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedLinks;

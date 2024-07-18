// components/FeaturedLinks.tsx
import React from 'react';
import { Grid, Typography, Box, Chip } from '@mui/material';
import { FeaturedLinksData } from "@/types";
import { chip, containerStyles, title } from './styles';

const FeaturedLinks: React.FC<{ data: FeaturedLinksData }> = ({ data }) => {
  return (
    <Box sx={containerStyles}>
      <Typography variant="h6" sx={title}>
        Featured Links
      </Typography>
      <Grid container sx={{ marginTop: '24px' }}>
        {data.links.map((link, index) => (
            <Chip label={link.name} component="a" href={link.url} clickable sx={chip} key={index}/>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedLinks;

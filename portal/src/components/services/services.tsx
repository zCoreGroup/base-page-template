import React from 'react';
import { Box, Grid, Typography, Pagination } from '@mui/material';
import HexagonImageLink from '../hexagonimagelink/hexagonimagelink';
import { ServicesData } from '@/types';

const Services: React.FC<{ data: ServicesData }> = ({ data }) => {
  return (
    <React.Fragment>
      <Box sx={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#e9542f', fontWeight: 'bold', fontSize: '28px' }}>
              Military Family & Support Services
            </Typography>
            <Grid container spacing={3} sx={{ marginTop: '10px' }}>
              {data.links.map((link, index) => (
              <Grid item xs={6} sm={4} key={index}>
                 <HexagonImageLink url={link.url} imageUrl={link.imageUrl} name={link.name}/>
              </Grid>
            ))}
             </Grid>

        <Box display="flex" justifyContent="center" sx={{ marginTop: '2em'  }}>
          <Pagination count={2}  disabled />
        </Box>
        </Box>
        </React.Fragment>
  );
};

export default Services;
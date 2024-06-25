// components/FeaturedLinks.tsx
import React from 'react';
import { Grid, Typography } from '@mui/material';
import { FeaturedLinksData } from './types';

const FeaturedLinks: React.FC<{ data: FeaturedLinksData }> = ({ data }) => {
  return (
    <div style={{ backgroundColor: '#1a1a1a', padding: '20px' }}>
      <Typography variant="h6" style={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '28px' }}>
        Featured Links
      </Typography>
      <Grid container spacing={2} style={{ marginTop: '10px' }}>
        {data.links.map((link, index) => (
          <Grid item xs={2} key={index}>
            <a href={link.url} style={{ color: 'inherit', textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#1a1a1a', color: '#fff', borderRadius: '8px', overflow: 'hidden', textAlign: 'center' }}>
                <div style={{ position: 'relative', paddingBottom: '100%', height: 0 }}>
                  <img
                    src={link.imageUrl}
                    alt={link.name}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
                <Typography variant="subtitle1" style={{ fontSize: '28px', padding: '10px 0'}}>
                  {link.name}
                </Typography>
              </div>
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedLinks;

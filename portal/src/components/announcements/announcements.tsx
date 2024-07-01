// components/CarouselSection.tsx
'use client';

import React from 'react';
import { Grid, Typography, Box, Paper, Card, CardMedia, CardContent } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { AnnouncementsData, Announcement as AnnouncementsItem } from './types';
import HexagonImageOverlay from '../hexagonimageoverlay/hexagonimageoverlay'

const Item: React.FC<{ item: AnnouncementsItem }> = ({ item }) => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia
        component="img"
        height="300"
        image={item.imageSrc}
        alt={item.description}
      />
      <CardContent sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', transition: 'opacity 0.3s' }}
        className="overlay">
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2">{item.description}</Typography>
      </CardContent>
    </Card>
  );
};

const Announcements: React.FC<{ data: AnnouncementsData }> = ({ data }) => {
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', padding: '20px' }}>
      <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '28px' }}>
        Announcements
      </Typography>
      <Carousel
        animation="slide"
        indicators={true}
        navButtonsAlwaysVisible={true}
        sx={{
          maxWidth: "600px",
          flexGrow: 1,
          margin: "auto",
          mt: 5,
        }}
      >
        {data.items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Announcements;

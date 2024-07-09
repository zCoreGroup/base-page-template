// components/announcements.tsx
'use client';

import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { AnnouncementsData, Announcement as AnnouncementsItem } from "@/types";
import CustomIndicator from './customindicator';

interface ItemProps {
  item: AnnouncementsItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <Card sx={{ position: 'relative', backgroundColor: '#333' }}>
      <CardMedia
        component="img"
        height="400"
        image={item.image}
        alt={item.description}
      />
      <CardContent sx={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          width: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          color: 'white', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          textAlign: 'left', 
          padding: '10px',
          transition: 'opacity 0.3s' 
        }}
      >
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2">{item.description}</Typography>
      </CardContent>
    </Card>
  );
};

interface AnnouncementsProps {
  data: AnnouncementsData;
}

const Announcements: React.FC<AnnouncementsProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleCarouselChange = (now?: number | undefined, previous?: number | undefined) => {
    if (typeof now === 'number' && !isNaN(now)) {
      setActiveIndex(now);
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h6" sx={{ color: '#e9542f', fontWeight: 'bold', fontSize: '28px', textAlign: 'left', marginBottom: '20px' }}>
        Announcements
      </Typography>
      <Carousel
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        index={activeIndex}
        onChange={handleCarouselChange}
        sx={{
          maxWidth: "50%",
          flexGrow: 1,
          margin: "auto",
        }}
      >
        {data.announcements.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <CustomIndicator
        length={data.announcements.length}
        activeIndex={activeIndex}
        onClick={handleIndicatorClick}
      />
    </Box>
  );
};

export default Announcements;

// components/baseevents.tsx
'use client';
import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Pagination } from '@mui/material';
import { BaseEventsData, BaseEvent as BaseEventsItem } from "@/types";

interface BaseEventsProps {
  data: BaseEventsData;
}

const BaseEvents: React.FC<BaseEventsProps> = ({ data }) => {
  const [page, setPage] = useState(1);
  const cardsPerPage = 3; // Adjust this number based on your layout and preference

  const handleChange = (_: any, value: number) => {
    setPage(value);
  };

  const indexOfLastCard = page * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.baseEvents.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {currentCards.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345, margin: 2 }}>
            <CardActionArea href={card.link} target="_blank" rel="noopener noreferrer">
              <CardMedia component="img" height="140" image={card.image} alt={card.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Pagination
        count={Math.ceil(data.baseEvents.length / cardsPerPage)}
        page={page}
        onChange={handleChange}
        sx={{ marginTop: 2 }}
      />
    </Box>
  );
};

export default BaseEvents;

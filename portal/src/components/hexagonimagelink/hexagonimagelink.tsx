import React from 'react';
import { Box, Typography } from '@mui/material';
import HexagonImageOverlay from '../hexagonimageoverlay/hexagonimageoverlay';
import {HexagonImageLinkData} from '@/types';

const HexagonImageLink: React.FC<HexagonImageLinkData> = ({ url, imageUrl, name }) => {
    return (
      <a href={url} style={{ color: 'inherit', textDecoration: 'none' }}>
        <Box sx={{ color: '#fff', borderRadius: '8px', overflow: 'hidden', textAlign: 'center' }}>
          <HexagonImageOverlay imageUrl={imageUrl} altText={name} sideLength={50}/>
          <Typography variant="subtitle1" sx={{ fontSize: '16px' }}>
            {name}
          </Typography>
        </Box>
      </a>
    );
  };
  
  export default HexagonImageLink;
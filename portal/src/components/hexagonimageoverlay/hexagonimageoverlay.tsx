import React from 'react';
import { Box } from '@mui/material';

const HexagonImageOverlay: React.FC<HexagonImageOverlayData> = ({ imageUrl, altText }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100px',
                height: '100px',
                margin: '20px auto',
                backgroundColor: '#1a1a1a',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', // Hexagon with bottom edge oriented
            }}
        >
            <Box
                component="img"
                src={imageUrl}
                alt={altText}
                sx={{
                    width: '100%',
                    height: '100%',
                    clipPath: 'inherit',
                    objectFit: 'cover', // Ensures the image covers the entire hexagon
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '3px solid rgba(255, 255, 255, 0.7)', // Border for the hexagon
                    clipPath: 'inherit',
                    boxSizing: 'border-box',
                }}
            />
        </Box>
    );
};
export default HexagonImageOverlay;

"use client"
import { HexagonImageOverlayData } from '@/types';
import React, { useEffect, useRef } from 'react';

const HexagonImageOverlay: React.FC<HexagonImageOverlayData> = ({ imageUrl, altText, sideLength }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                const width = sideLength * Math.sqrt(3);
                const height = sideLength * 2;

                // Define hexagon points
                const hexagon = [
                    { x: width / 2, y: 0 },
                    { x: width, y: sideLength / 2 },
                    { x: width, y: sideLength * 1.5 },
                    { x: width / 2, y: height },
                    { x: 0, y: sideLength * 1.5 },
                    { x: 0, y: sideLength / 2 },
                ];

                // Load the image
                const image = new Image();
                image.src = imageUrl;
                image.onload = () => {
                    // Clear the canvas
                    context.clearRect(0, 0, canvas.width, canvas.height);

                    // Create hexagon path
                    context.beginPath();
                    context.moveTo(hexagon[0].x, hexagon[0].y);
                    for (let i = 1; i < hexagon.length; i++) {
                        context.lineTo(hexagon[i].x, hexagon[i].y);
                    }
                    context.closePath();

                    // Clip to hexagon
                    context.clip();

                    // Calculate aspect ratio
                    const aspectRatio = image.width / image.height;
                    const canvasAspectRatio = width / height;

                    let drawWidth, drawHeight;
                    if (aspectRatio > canvasAspectRatio) {
                        drawWidth = width;
                        drawHeight = width / aspectRatio;
                    } else {
                        drawHeight = height;
                        drawWidth = height * aspectRatio;
                    }

                    const drawX = (width - drawWidth) / 2;
                    const drawY = (height - drawHeight) / 2;

                    // Draw the image centered within the hexagon
                    context.drawImage(image, drawX, drawY, drawWidth, drawHeight);

                    // Reset the clip to draw the hexagon border
                    context.beginPath();
                    context.moveTo(hexagon[0].x, hexagon[0].y);
                    for (let i = 1; i < hexagon.length; i++) {
                        context.lineTo(hexagon[i].x, hexagon[i].y);
                    }
                    context.closePath();
                    context.strokeStyle = 'white';
                    context.lineWidth = 1; // 1 pixel border
                    context.stroke();
                };
            }
        }
    }, [imageUrl]);

    return (
        <canvas
            ref={canvasRef}
            width={sideLength * Math.sqrt(3) + 2} // Slightly increase width of the bounding box
            height={sideLength * 2 + 2} // Slightly increase height of the bounding box
            style={{
                display: 'block',
                margin: '20px auto'
            }}
            aria-label={altText}
            data-testid="hexagon-canvas"
        />
    );
};

export default HexagonImageOverlay;
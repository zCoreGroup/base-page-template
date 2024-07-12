import React from 'react';
import { render, screen } from '@testing-library/react';
import HexagonImageOverlay from '@/components/hexagonimageoverlay/hexagonimageoverlay';

const hexagonImageOverlayData = {
    imageUrl: 'https://example.com/image.png',
    altText: 'Sample Image',
    sideLength: 50
};

describe('HexagonImageOverlay', () => {
    it('renders the canvas element', () => {
        render(<HexagonImageOverlay {...hexagonImageOverlayData} />);

        const canvasElement = screen.getByTestId('hexagon-canvas');
        expect(canvasElement).toBeInTheDocument();
    });
});

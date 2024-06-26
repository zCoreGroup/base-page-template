import React from 'react';
import { render, screen } from '@testing-library/react';
import HexagonImageOverlay from '@/components/hexagonimageoverlay/hexagonimageoverlay';

const hexagonImageOverlayData: HexagonImageOverlayData = {
    imageUrl: 'https://example.com/image.png',
    altText: 'Sample Image',
};

describe('HexagonImageOverlay', () => {
    it('renders the image with the correct src and alt attributes', () => {
        render(<HexagonImageOverlay {...hexagonImageOverlayData} />);

        const imgElement = screen.getByRole('img') as HTMLImageElement;

        expect(imgElement).toBeInTheDocument();
        expect(imgElement.src).toBe(hexagonImageOverlayData.imageUrl);
        expect(imgElement.alt).toBe(hexagonImageOverlayData.altText);
    });
});

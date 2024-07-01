import React from 'react';
import { render } from '@testing-library/react';
import HexagonImageLink from '@/components/hexagonimagelink/hexagonimagelink';

describe('HexagonImageLink', () => {
    const props = {
      url: 'https://example.com',
      imageUrl: 'https://example.com/image.jpg',
      name: 'Example Link'
    };
  
    test('renders correctly with given props', () => {
      const { getByText, getByAltText, container } = render(<HexagonImageLink {...props} />);
  
      // Check link
      const linkElement = getByText(props.name).closest('a');
      expect(linkElement).toHaveAttribute('href', props.url);
  
      // Check image
      const imageElement = getByAltText(props.name);
      expect(imageElement).toHaveAttribute('src', props.imageUrl);
  
      // Check text
      const textElement = getByText(props.name);
      expect(textElement).toBeInTheDocument();
    });
  });
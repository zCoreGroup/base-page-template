import { render, screen } from '@testing-library/react';
import Home from '../../src/app/page';

describe('Home', () => {
  it('renders the main content', () => {
    render(<Home />);
    
    // Check if the main section is rendered
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();

    // Check if the description paragraph is rendered
    const descriptionElement = screen.getByText(/Get started by editing/i);
    expect(descriptionElement).toBeInTheDocument();

    // Check if the Next.js logo is rendered
    const nextLogo = screen.getByAltText('Next.js Logo');
    expect(nextLogo).toBeInTheDocument();

    // Check if the Vercel logo is rendered
    const vercelLogo = screen.getByAltText('Vercel Logo');
    expect(vercelLogo).toBeInTheDocument();

    // Check if the links are rendered
    const docsLink = screen.getByText(/Docs/i).closest('a');
    expect(docsLink).toHaveAttribute('href', 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app');
  });
});

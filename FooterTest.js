import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For additional matchers
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders Footer component without crashing', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Check for the <footer> role
  });

  test('renders About Us section', () => {
    render(<Footer />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/At ShopSphere, we bring you the best/i)).toBeInTheDocument();
  });

  test('renders Quick Links with all items', () => {
    render(<Footer />);
    const quickLinks = screen.getByText(/Quick Links/i);
    expect(quickLinks).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(5); // Five links in the Quick Links section
    expect(links.map(link => link.getAttribute('href'))).toEqual([
      '/shop',
      '/about',
      '/contact',
      '/faq',
      '/terms',
    ]);
  });

  test('renders Connect With Us section and social icons', () => {
    render(<Footer />);
    const socialSection = screen.getByText(/Connect With Us/i);
    expect(socialSection).toBeInTheDocument();

    const socialIcons = screen.getAllByRole('img', { name: /social/i });
    expect(socialIcons).toHaveLength(4); // Four social media icons
    expect(socialIcons.map(icon => icon.getAttribute('alt'))).toEqual([
      'Facebook',
      'Twitter',
      'Instagram',
      'LinkedIn',
    ]);
  });

  test('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2024 SHOPSPHERE All Rights Reserved./i)).toBeInTheDocument();
  });
});

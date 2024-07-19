import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './Logo';
import companyLogo from '../../assets/Sigma Software logo.png';

test('renders the logo image', () => {
  const { getByAltText } = render(<Logo />);
  const logoImage = getByAltText('Sigma Software logo');
  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveAttribute('src', companyLogo);
});

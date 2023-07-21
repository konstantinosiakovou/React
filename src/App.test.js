import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

import Booking from './Pages/Booking';

test('Renders the BookingForm heading', () => {
    render(<Booking />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import {Booking} from './Pages/Booking.js';

// test('Renders the Booking', () => {
//     render(<Booking />);
//     const headingElement = screen.getByText("Book Now");
//     expect(headingElement).toBeInTheDocument();
// });

describe('initializeTimes', () => {
    it('should return the correct expected value', () => {
      const initializeTimes = [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
      ];
        
    });
  });

  describe('updateTimes', () => {
    it('should return the correct expected value', () => {
      const state = {
        times: [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
      ],
    };
  
    
    });
  });
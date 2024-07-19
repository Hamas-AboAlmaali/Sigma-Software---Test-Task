import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import CandidateInfo from './CandidateInfo';

jest.mock('axios');

describe('CandidateInfo Component', () => {
  test('renders the form and submits data', async () => {
    const { getByLabelText, getByText } = render(<CandidateInfo />);

    fireEvent.change(getByLabelText(/First name/i), { target: { value: 'Hamas' } });
    fireEvent.change(getByLabelText(/Last name/i), { target: { value: 'Ahmed' } });
    fireEvent.change(getByLabelText(/Phone number/i), { target: { value: '+201146800935' } });
    fireEvent.change(getByLabelText(/Email/i), { target: { value: 'hamasahmed0@gmail.com' } });
    fireEvent.change(getByLabelText(/LinkedIn profile URL/i), { target: { value: 'https://www.linkedin.com/in/hamasahmed/' } });
    fireEvent.change(getByLabelText(/GitHub profile URL/i), { target: { value: 'https://github.com/Hamas-AboAlmaali' } });
    fireEvent.change(getByLabelText(/Free text Comment/i), { target: { value: 'This is my information!' } });

    axios.post.mockResolvedValueOnce({ data: 'success' });

    fireEvent.click(getByText(/Submit/i));

    await screen.findByText('Form submitted successfully!');

    expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/api/candidates', {
      firstName: 'Hamas',
      lastName: 'Ahmed',
      phoneNumber: '+201146800935',
      email: 'hamasahmed0@gmail.com',
      linkedInURL: 'https://www.linkedin.com/in/hamasahmed/',
      GitHubURL: 'https://github.com/Hamas-AboAlmaali',
      comment: 'This is my information!'
    });
  });

  test('displays an error message if the form submission fails', async () => {
    const { getByLabelText, getByText } = render(<CandidateInfo />);

    fireEvent.change(getByLabelText(/First name/i), { target: { value: 'Hamas' } });
    fireEvent.change(getByLabelText(/Last name/i), { target: { value: 'Ahmed' } });
    fireEvent.change(getByLabelText(/Phone number/i), { target: { value: '+201146800935' } });
    fireEvent.change(getByLabelText(/Email/i), { target: { value: 'hamasahmed0@gmail.com.com' } });
    fireEvent.change(getByLabelText(/LinkedIn profile URL/i), { target: { value: 'https://www.linkedin.com/in/hamasahmed/' } });
    fireEvent.change(getByLabelText(/GitHub profile URL/i), { target: { value: 'https://github.com/Hamas-AboAlmaali' } });
    fireEvent.change(getByLabelText(/Free text Comment/i), { target: { value: 'This is my information!' } });

    axios.post.mockRejectedValueOnce(new Error('Failed to submit the form!'));

    fireEvent.click(getByText(/Submit/i));

    await screen.findByText('Failed to submit the form!');

    expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/api/candidates', {
      firstName: 'Hamas',
      lastName: 'Ahmed',
      phoneNumber: '+201146800935',
      email: 'hamasahmed0@gmail.com',
      linkedInURL: 'https://www.linkedin.com/in/hamasahmed/',
      GitHubURL: 'https://github.com/Hamas-AboAlmaali',
      comment: 'This is my information!'
    });
  });
});

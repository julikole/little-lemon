import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Booking from './Booking';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


describe('Booking', () => {
    const availableTimesMock = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const dispatchMock = jest.fn();
    const updateTimesMock = jest.fn();
    const initializeTimesMock = jest.fn();
    test('Renders the Booking heading', () => {

        render(<Booking availableTimes={availableTimesMock} dispatch={dispatchMock} updateTimes={updateTimesMock} />);
        const headingElement = screen.getByText(/book now/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('should return the updated available times depending on the chosen date, test for updateTimes', () => {
        const { getByLabelText, getByText } = render(<Booking availableTimes={availableTimesMock} dispatch={dispatchMock} updateTimes={updateTimesMock} initializeTimes={initializeTimesMock} />);
        const dateInput = getByLabelText(/choose date/i);

        fireEvent.change(dateInput, { target: { value: '2023-09-01' } });

        expect(getByText('17:00')).toBeInTheDocument();
    });

    test('render email input', () => {
        const { getByTestId } = render(<Booking availableTimes={availableTimesMock} dispatch={dispatchMock} updateTimes={updateTimesMock} initializeTimes={initializeTimesMock} />);

        const inputEl = getByTestId("email-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "email");
    });

    test('pass valid email to test email input field', () => {
        const { getByTestId } = render(<Booking availableTimes={availableTimesMock} dispatch={dispatchMock} updateTimes={updateTimesMock} initializeTimes={initializeTimesMock} />);

        act(() => {
            const inputEl = getByTestId("email-input");
            userEvent.type(inputEl, "test@mail.com");
            expect(inputEl).toBeInTheDocument();
            expect(inputEl).toHaveValue("test@mail.com");
        });
    });

    test('disables submit button when form is invalid', () => {
        render(<Booking availableTimes={availableTimesMock} dispatch={dispatchMock} updateTimes={updateTimesMock} initializeTimes={initializeTimesMock} />);
        const submitButton = screen.getByRole('button', { name: /Reserve/i });

        // Initially, the form should be invalid and the submit button should be disabled
        expect(submitButton).toBeDisabled();

        // // Filling in form fields
        fireEvent.change(screen.getByTestId("date"), { target: { value: '2023-08-31' } });
        fireEvent.change(screen.getByTestId("time"), { target: { value: '17:00' } });
        fireEvent.change(screen.getByTestId("guests"), { target: { value: '4' } });
        fireEvent.change(screen.getByTestId("name"), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByTestId("email-input"), { target: { value: 'johndoe@example.com' } });

        // Now the form should be valid and the submit button should be enabled
        expect(submitButton).toBeEnabled();
    });

})

describe('Main component', () => {

    test('Initialize/Update Times works as expected', () => {
        render(<BrowserRouter><App /></BrowserRouter>);
        const reserveButton = screen.getByDisplayValue("Reserve");
        fireEvent.click(reserveButton);
    });

});









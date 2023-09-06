import React, { useState } from 'react';
import validateemail from './utils/validateemail.js'

const BookingForm = ({
  date,
  time,
  guests,
  occasion,
  name,
  email,
  comments,
  availableTimes,
  occasions,
  onDateChange,
  onTimeChange,
  onGuestsChange,
  onOccasionChange,
  onNameChange,
  onEmailChange,
  onCommentsChange,
  dispatch,
  submitForm,
  clearForm
}) => {

  const [showOverlay, setShowOverlay] = useState(false); // State to control overlay visibility
  const [bookingDetails, setBookingDetails] = useState({}); // State to store booking details

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { date, time, guests, occasion, name, email, comments };
    submitForm(formData);
    setBookingDetails(formData); // Store booking details
    setShowOverlay(true); // Show overlay
    console.log('Form submitted');
    clearForm();
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    onDateChange(event); // Call the original onDateChange function to update the date state
    dispatch({ type: 'SET_SELECTED_DATE', payload: selectedDate }); // Dispatch the new selected date
  };

  const today = new Date().toISOString().split("T")[0];

  const isFormValid = () => {
    return (
      name &&
      validateemail(email) &&
      date &&
      time &&
      guests
    );
  };

  return (
    <>
      <form id="booking-form" onSubmit={handleSubmit} data-testid="form">
        <div className="left-container">
          <label htmlFor="res-date">Choose date <sup>*</sup></label>
          <input
            type="date"
            id="res-date"
            name="res-date"
            data-testid="date"
            min={today}
            value={date}
            onChange={handleDateChange}
            required />

          <label htmlFor="res-time">Choose time <sup>*</sup></label>
          {console.log('Available Times (BookingForm):', availableTimes)}
          <select id="res-time" value={time} onChange={onTimeChange} data-testid="time">
            {availableTimes.map((availableTime, index) => (
              <option key={index} required >{availableTime}</option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests <sup>*</sup></label>
          <input
            type="number"
            placeholder="1"
            data-testid="guests"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={onGuestsChange}
            required />

          <label htmlFor="occasion">Occasion (optional)</label>
          <select
            id="occasion"
            value={occasion}
            onChange={onOccasionChange}>
            {occasions.map((occasion, index) => (
              <option key={index}>{occasion}</option>
            ))}
          </select>
        </div>
        <div className="right-container">
          <label htmlFor="name">Your Name <sup>*</sup></label>
          <input
            type="text"
            placeholder="type your name here"
            id="name"
            name="name"
            data-testid="name"
            value={name}
            onChange={onNameChange}
            minLength={2}
            maxLength={50}
            required />

          <label htmlFor="email">Your E-mail <sup>*</sup></label>
          <input
            validateemail="true"
            type="email"
            data-testid="email-input"
            placeholder="type your e-mail here"
            id="email"
            name="email"
            value={email}
            onChange={onEmailChange}
            required />

          <label htmlFor="comments">Additional Information</label>
          <textarea rows="4" cols="40" maxLength="200" name="comments" placeholder="type your message here" id="comments" value={comments} onChange={onCommentsChange} />

          <input type="submit" disabled={!isFormValid()} value="Reserve" data-testid="reserve-btn" />
        </div>
        {showOverlay && (
          <div className="overlay" data-testid="overlay">
            <div className="overlay-content">
              <h2>Thank you for your booking, <span>{bookingDetails.name}</span>!</h2>
              <div className="columns">
                <div className="column-1">
                  <p>Date:</p>
                  <p>Time:</p>
                  <p>Number of guests:</p>
                  <p>Occasion:</p>
                  <p>Name:</p>
                  <p>E-mail:</p>
                  <p>Message:</p>
                </div>
                <div className="column-2">
                  <p>{bookingDetails.date}</p>
                  <p>{bookingDetails.time}</p>
                  <p>{bookingDetails.guests}</p>
                  <p>{bookingDetails.occasion}</p>
                  <p>{bookingDetails.name}</p>
                  <p>{bookingDetails.email}</p>
                  <p>{bookingDetails.comments}</p>
                </div>
              </div>
            </div>
            <button className="close-button" aria-label="Close" onClick={() => setShowOverlay(false)}>X</button>
          </div>
        )}
      </form>



    </>
  );
};

export default BookingForm;





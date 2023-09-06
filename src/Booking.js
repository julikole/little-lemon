import React, { forwardRef, useState } from 'react';
import BookingForm from './BookingForm';

const Booking = forwardRef(({ availableTimes, dispatch, updateTimes, submitForm }, ref) => { // Receiving submitForm via props
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [occasion, setOccasion] = useState('None');

  const clearForm = () => {
    setDate('');
    setTime('17:00');
    setGuests(1);
    setName('');
    setEmail('');
    setComments('');
    setOccasion('None');
  }

  const occasions = ['None', 'Birthday', 'Wedding Anniversary', 'Date', 'Bachelor(ette) Party', 'Baby Shower', 'Engagement', 'Promotion', 'Farewell'];

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    const newAvailableTimes = updateTimes(null, selectedDate); // Passing selected date to updateTimes function
    dispatch({ type: 'SET_AVAILABLE_TIMES', payload: newAvailableTimes });
    setDate(selectedDate);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(parseInt(event.target.value, 10));
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div ref={ref} className='booking-container'>
      <h1>Book Now</h1>
      <BookingForm
        date={date}
        time={time}
        guests={guests}
        occasion={occasion}
        name={name}
        email={email}
        occasions={occasions}
        comments={comments}
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
        onGuestsChange={handleGuestsChange}
        onOccasionChange={handleOccasionChange}
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onCommentsChange={handleCommentsChange}
        dispatch={dispatch}
        submitForm={submitForm}
        clearForm={clearForm}
      />
    </div>
  );
});

export default Booking;
import React, { useReducer, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Booking from './Booking';
import mainReducer from './utils/mainReducer';

const Main = () => {

  const bookingRef = useRef(null);
  const navigate = useNavigate();

  // API from week 3 is copied directly into the file, as fetching from the web resourse
  // didn't work for many students including myself (as per discussion forum)

  const submitAPI = function (formData) {
    return true;
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/booking-confirmed', { state: { message: "Booking confirmed" } }); // Navigating to the BookingConfirmed component
      console.log('Form submitted-2');
    }
    else {
      navigate("/error", { state: { message: "Failed to submit form" } });
    }
  };

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() > 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };


  const initializeTimes = () => {
    let today = new Date();
    console.log("Initial Avilable Times-2:", fetchAPI(today));
    return fetchAPI(today); // Updated to use fetchAPI
  };

  const updateTimes = (state, date) => {
    const selectedDate = new Date(date);
    const newAvailableTimes = fetchAPI(selectedDate); // Updated to use fetchAPI
    console.log("Updated Available Times:", newAvailableTimes);
    return newAvailableTimes;
  };

  const initialState = {
    availableTimes: initializeTimes()
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <main id="main-content" className="column-grid">
      <Hero scrollToRef={bookingRef} />
      <Specials />
      <Testimonials />
      <Booking availableTimes={state.availableTimes} dispatch={dispatch} updateTimes={updateTimes} submitForm={submitForm} ref={bookingRef} /> {/* Passing submitForm function */}
      <About />
    </main>
  );
};

export default Main;






import React from "react";
import "./App.css";

import Header from "./components/Header";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./Bookings";

import Footer from "./components/Footer";

import Restaurant from "./Restaurant";

const hotelAddress = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

export const App = () => {
  return (
    <div>
      <Header />
      <TouristInfoCards />
      <Bookings />

      <Footer fakeHotel={hotelAddress} />
      <Restaurant />
    </div>
  );
};

export default App;

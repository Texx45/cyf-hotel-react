import React from "react";
import "./App.css";

import Header from "./components/Header";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./Bookings";

import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import Footer from "./components/Footer";
import fakeBookings from "./data/fakeBookings.json";

const headingItems = [
  "ID",
  "Title",
  "First Name",
  "Last Name",
  "Email",
  "Room ID",
  "Check in Date",
  "Check out Date",
  "Number Of Nights"
];

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
      <table className="table ">
        <TableHeader tableTitles={headingItems} />
        <TableBody tableBookings={fakeBookings} />
      </table>
      <Footer fakeHotel={hotelAddress} />
    </div>
  );
};

export default App;

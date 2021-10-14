import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";
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

const Bookings = () => {
  const [bookings, setBookings] = useState(fakeBookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} headingTitles={headingItems} />
      </div>
    </div>
  );
};

export default Bookings;

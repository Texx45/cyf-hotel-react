import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";

const headingItems = [
  "ID",
  "Title",
  "First Name",
  "Last Name",
  "Email",
  "Room ID",
  "Check in Date",
  "Check out Date",
  "Number Of Nights",
  "Profile"
];

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  //! 19a Implement the search method 👇
  const search = searchVal => {
    // console.log("Search Val:", searchVal);
    const filteredBooking = bookings.filter(booking => {
      return booking.firstName === searchVal || booking.surname === searchVal;
    });
    //* 19. This function gets passed through to Search.js 👆

    console.log({ filteredBooking });
    setBookings(filteredBooking);
  };

  //! Fetch data from the API 👇
  useEffect(() => {
    console.log("fetching from CYF");

    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched Data:", data); //! Fetched Data log
        setBookings(data);
      });
  }, []);

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

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
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const search = searchVal => {
    const filteredBooking = bookings.filter(booking => {
      return booking.firstName === searchVal || booking.surname === searchVal;
    });

    console.log({ filteredBooking });
    setBookings(filteredBooking);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://cyf-react.glitch.me/delayed");
        if (!res.ok) {
          throw new Error("response error");
        }
        const jsonData = await res.json();
        setBookings(jsonData);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        console.log(err.name);
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading && (
          <div className="loading-message">
            <h1>Loading please wait...</h1>
          </div>
        )}
        {isError ? (
          <div className="error-message">
            <h1>Some error message...</h1>
          </div>
        ) : (
          <SearchResults bookings={bookings} headingTitles={headingItems} />
        )}
      </div>
    </section>
  );
};

export default Bookings;

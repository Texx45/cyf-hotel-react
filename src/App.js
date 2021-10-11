import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
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
  "Number Of Nights",
];

export const App = () => {
  return (
    <div>
      <Bookings />
      <table className="table ">
        <TableHeader tableTitles={headingItems} />
        <TableBody tableBookings={fakeBookings} />
      </table>
    </div>
  );
};

export default App;

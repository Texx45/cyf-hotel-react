import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

// const tableRows = bookings.map(booking => (
//   <tr key={booking.id}>
//     <td>{booking.title}</td>
//     <td>{booking.firstName}</td>
//     <td>{booking.surname}</td>
//     <td>{booking.email}</td>
//     <td>{booking.roomId}</td>
//     <td>{booking.checkInDate}</td>
//     <td>{booking.checkOutDate}</td>
//     <td>{howManyDay(booking.checkInDate, booking.checkOutDate)}</td>
//   </tr>

import React from "react";
import moment from "moment";

const TableBody = ({ tableBookings }) => {
  const listBookings = tableBookings.map(guestInfo => (
    <tr key={guestInfo.id}>
      <td>{guestInfo.id}</td>
      <td>{guestInfo.title}</td>
      <td>{guestInfo.firstName}</td>
      <td>{guestInfo.surname}</td>
      <td>{guestInfo.email}</td>
      <td>{guestInfo.roomId}</td>
      <td>{guestInfo.checkInDate}</td>
      <td>{guestInfo.checkOutDate}</td>
      <td>
        {moment(guestInfo.checkOutDate).diff(
          moment(guestInfo.checkInDate),
          "days"
        )}
      </td>
    </tr>
  ));
  return (
    <>
      <tbody>{listBookings}</tbody>
    </>
  );
};

export default TableBody;
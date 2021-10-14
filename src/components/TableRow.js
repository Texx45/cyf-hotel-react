import React from "react";
import moment from "moment";
import { useState } from "react";

const TableRow = ({ guestInfo }) => {
  const [selected, setSelected] = useState("");

  const addClass = () => {
    setSelected(previousData =>
      previousData === "table-success" ? "" : "table-success"
    );
  };
  return (
    <tr className={selected} onClick={addClass} key={guestInfo.id}>
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
  );
};

export default TableRow;

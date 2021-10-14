import React, { useState } from "react";
import moment from "moment";
import TableRow from "./TableRow";

const TableBody = ({ tableBookings }) => {
  const listBookings = tableBookings.map(guestInfo => (
    <TableRow key={guestInfo.id} guestInfo={guestInfo} />
  ));
  return (
    <>
      <tbody>{listBookings}</tbody>
    </>
  );
};

export default TableBody;

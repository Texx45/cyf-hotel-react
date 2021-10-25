import React, { useState } from "react";
// import moment from "moment";
import TableRow from "./TableRow";

const TableBody = ({ tableBookings, updateId }) => {
  const listBookings = tableBookings.map(guestInfo => (
    <TableRow key={guestInfo.id} updateId={updateId} guestInfo={guestInfo} />
  ));
  return (
    <>
      <tbody>{listBookings}</tbody>
    </>
  );
};

export default TableBody;

import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ bookings, headingTitles }) => {
  const [id, setId] = useState(null);

  const updateId = id => {
    console.log("Clicked");
    setId(id);
  };

  return (
    <>
      <table className="table ">
        <TableHeader tableTitles={headingTitles} />
        <TableBody updateId={updateId} tableBookings={bookings} />
      </table>
      <CustomerProfile id={id} />
    </>
  );
};

export default SearchResults;

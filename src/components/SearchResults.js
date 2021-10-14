import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const SearchResults = ({ bookings, headingTitles }) => {
  return (
    <table className="table ">
      <TableHeader tableTitles={headingTitles} />
      <TableBody tableBookings={bookings} />
    </table>
  );
};

export default SearchResults;

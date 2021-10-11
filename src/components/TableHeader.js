import React from "react";

const TableHeader = ({ tableTitles }) => {
  const insertTitles = tableTitles.map((heading, index) => (
    <th key={index}>{heading}</th>
  ));
  return (
    <>
      <thead className="table-dark">
        <tr>{insertTitles}</tr>
      </thead>
    </>
  );
};

export default TableHeader;

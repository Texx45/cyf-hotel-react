import React, { useState } from "react";

const Search = ({ search }) => {
  //* receives search() function as prop
  // console.log("Search.js - {search}", search);

  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    search(searchInput);
  };

  function handleSearchInput(event) {
    // console.log(event.target.value);
    setSearchInput(event.target.value);
    console.log(searchInput); //* Logs input value
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={handleSubmit} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                value={searchInput}
                onChange={handleSearchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React, { useState } from "react";

const Search = ({ search }) => {
  //* receives search() function as prop
  // console.log("Search.js - {search}", search);
  //! 17a Sets the initial state to empty string 👇
  const [searchInput, setSearchInput] = useState("");

  //! 18b Pass onSubmit handler to search prop 👇
  const handleSubmit = e => {
    e.preventDefault(); //* prevent form re-render
    search(searchInput); //* runs search function using value as input
  };

  //! 17b Sets the state variable to what is typed into the input field 👇
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
          //! 18a Add an onsubmit handler to form tag 👇
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

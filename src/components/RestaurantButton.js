import React from "react";

const RestaurantButton = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary">
        Add 1
      </button>
    </div>
  );
};

export default RestaurantButton;

import React from "react";
import Order from "./components/Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate" />
      </ul>
    </div>
  );
};

export default Restaurant;

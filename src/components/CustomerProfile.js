import React, { useEffect, useState } from "react";
//* STYLES
import "./CustomerProfile.css";

const CustomerProfile = ({ id }) => {
  const [customerInfo, setCustomerInfo] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log("Fetched Data:", data);
          setCustomerInfo(data);
        });
    }
  }, [id]);
  return (
    <div className="customer-container">
      {/* <h1>Customer Profile: {id}</h1> */}

      <ul>
        <li>{customerInfo?.id}</li>
        <li>{customerInfo?.email}</li>
        <li>{customerInfo?.vip && "VIP"}</li>
        <li>{customerInfo?.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;

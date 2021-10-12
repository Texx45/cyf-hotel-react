import React from "react";

function Footer({ fakeHotel }) {
  return (
    <footer>
      <ul>
        {fakeHotel.map((hotel, i) => {
          return <li key={`Hotel ${i}`}>{hotel}</li>;
        })}
      </ul>
    </footer>
  );
}

export default Footer;

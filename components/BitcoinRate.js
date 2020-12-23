import React from "react";

function BitcoinRate({ description, rate, code }) {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        Bitcoin rate for {description}{" "}
        <span className="badge badge-info  "> {code} </span> : {rate}
      </li>
    </ul>
  );
}

export default BitcoinRate;

import React, { useState } from "react";
import BitcoinRate from "./BitcoinRate";

function Prices({ bpi }) {
  const [currency, setCurrency] = useState("USD");
  return (
    <div>
      <BitcoinRate
        description={bpi.EUR.description}
        code={bpi.EUR.code}
        rate={bpi.EUR.rate}
      />
      <BitcoinRate
        description={bpi.USD.description}
        code={bpi.USD.code}
        rate={bpi.USD.rate}
      />
      <BitcoinRate
        description={bpi.GBP.description}
        code={bpi.GBP.code}
        rate={bpi.GBP.rate}
      />
    </div>
  );
}

export default Prices;

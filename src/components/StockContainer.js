import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        return <Stock 
          key={stock.name}
          name={stock.name}
          ticker={stock.ticker}
          type={stock.type}
          price={stock.price}
          handleClick={handleClick}
        />
      })}
    </div>
  ); 
}

export default StockContainer;

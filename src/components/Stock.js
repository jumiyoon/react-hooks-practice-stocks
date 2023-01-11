import React from "react";

function Stock( { ticker, name, type, price, handleClick }) {
  function onClick() {
    const stock = {
      name: name,
      price: price,
      type: type,
      ticker: ticker
    }
    handleClick(stock)
  }

  
  return (
    <div>
      <div className="card" onClick={onClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

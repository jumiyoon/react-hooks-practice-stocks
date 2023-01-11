import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [ stocks, setStocks ] = useState([]);
  const [ myStocks, setMyStocks ] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((res) => res.json())
    .then((stockData) => setStocks(stockData))
  }, []);

    function buyStock(stock) {
      if (!myStocks.includes(stock)) {
        console.log("Bought", stock.name)
        setMyStocks([...myStocks, stock])
      } else if (myStocks.includes(stock)) {
        alert("Already purchased")
      }
    }

    function sellStock(stock) {
      console.log("Sold", stock.name)
      return setMyStocks(myStocks.filter((each) => each.name !== stock.name))
    }
   
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleClick={buyStock}  />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={myStocks} handleClick={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

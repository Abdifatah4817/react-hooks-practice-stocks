import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data));
  }, []);

  function handleBuyStock(stock) {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleSellStock(stock) {
    setPortfolio(portfolio.filter((item) => item.id !== stock.id));
  }

  // Sorting
  let displayedStocks = [...stocks];
  if (sortType === "Alphabetically") {
    displayedStocks.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "Price") {
    displayedStocks.sort((a, b) => a.price - b.price);
  }

  // Filtering
  if (filterType !== "All") {
    displayedStocks = displayedStocks.filter((stock) => stock.type === filterType);
  }

  return (
    <div>
      <SearchBar onSortChange={setSortType} onFilterChange={setFilterType} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={displayedStocks} onBuyStock={handleBuyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} onSellStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default App;

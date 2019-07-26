import React from "react";
import Chart from "./Chart";

const getCoinsToDisplay = (coinData, selectedCurrency) => {
  if (coinData.length === 0) {
    return [];
  } else if (!selectedCurrency) {
    return coinData;
  } else {
    return [coinData.find(coin => coin.id === selectedCurrency)];
  }
}

const Charts = (props) => {
  const coinData = props.coinData;
  const selectedCurrency = props.match.params.currency;
  console.log('coinData', coinData);
  let coinsToDisplay = getCoinsToDisplay(coinData, selectedCurrency);
  console.log('coinsToDisplay', coinsToDisplay);


  // if (coinData) {
  //   currencyData = coinData.find(coin => coin.name.toLowerCase() === selectedCurrency)
  // }
  return (
    <div className="charts">
      {coinsToDisplay.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;

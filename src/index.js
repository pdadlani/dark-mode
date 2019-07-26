import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  console.log('coinData', coinData);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar coinData={coinData} />
      <Switch>
        <Route 
          exact path="/" 
          render={props => <Charts coinData={coinData} {...props} />}
        />
        {/* <Route
          exact path="/bitcoin"
          render={props => <Charts coinData={[coinData[0]]} {...props} />}
        /> */}
        <Route
          path="/:currency"
          render={props => <Charts coinData={coinData} {...props} />}
        />
        {/* <Route
          path="/bitcoinsv"
          // render={props => <Charts coinData={coinData} {...props} />}
        /> */}
      </Switch>
      {/* <Charts coinData={coinData} /> */}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);

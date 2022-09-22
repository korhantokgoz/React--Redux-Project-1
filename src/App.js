import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ProductListing from "./container/ProductListing";
import Header from "./container/Header";
import "./App.css";
import ProductDetails from "./container/ProductDetail";


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Header />
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
import React from "react";
import MarketingRectComponent from "./components/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingRectComponent />
      </div>
    </BrowserRouter>
  );
};

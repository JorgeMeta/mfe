import React from "react";
import MarketingRectComponent from "./components/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <>
          <Header />
          <MarketingRectComponent />
        </>
      </StylesProvider>
    </BrowserRouter>
  );
};

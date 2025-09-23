import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemmoryHistory } from "history";
const mount = (el) => {
  const history = createMemmoryHistory();

  ReactDOM.render(<App history={history} />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing_dev_root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

import React from "react";
import { useRoutes } from "react-router-dom";

import { routes } from "./routes";

const App = () => {
  let element = useRoutes(routes());
  return <React.Fragment>{element}</React.Fragment>;
};
export default App;

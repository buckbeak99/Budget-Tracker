import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/AppContext";

import Layout from "./hoc/Layout/Layout";

const App = () => {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
};

export default App;

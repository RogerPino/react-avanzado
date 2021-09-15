import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <div id="app">
      <GlobalStyle />
      <ListOfCategories />
    </div>
  );
}

export default App;

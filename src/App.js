import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDropdown from "./components/ProductDropdown";
import SearchBar from "./components/SearchBar";
import { BackdropContext } from "./store/backdrop-context";
import Backdrop from "./UI/Backdrop";
import AllProducts from "./components/AllProducts";

function App() {
  const BackdropCtx = useContext(BackdropContext);

  return (
    <div className="App">
      <Router>
        <SearchBar />
        {BackdropCtx.backdrop && <ProductDropdown />}
        {BackdropCtx.backdrop && <Backdrop />}
        <Route path="/" exact></Route>
        <Route path="/:prod">
          <AllProducts />
        </Route>
      </Router>
    </div>
  );
}

export default App;

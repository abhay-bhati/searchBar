import "../styles/SearchBar.css";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { SearchContext } from "../store/search-context";
import { BackdropContext } from "../store/backdrop-context";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ProductDropdown from "./ProductDropdown";

function SearchBar() {
  const [value, setValue] = useState("");

  const history = useHistory();

  const SearchCtx = useContext(SearchContext);
  console.log("1");
  console.log(SearchCtx);

  const BackdropCtx = useContext(BackdropContext);
  console.log(BackdropCtx);

  const searchTextHandler = (event) => {
    console.log(event.target.value);
    console.log("2");
    SearchCtx.setSearchTerm(event.target.value);
    console.log(SearchCtx);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("all products");
    BackdropCtx.setBackdrop(false);
    history.push(`/${SearchCtx.searchTerm}`);
  };

  const inputClickHandler = () => {
    console.log("inupt clicked");
    BackdropCtx.setBackdrop(true);
  };

  return (
    <>
      <div className="searchBar-container">
        <h2 className="company-logo">CloudInfra</h2>
        <form className="searchBar" onSubmit={formSubmitHandler}>
          <input
            type="text"
            onClick={inputClickHandler}
            onChange={searchTextHandler}
            placeholder="Find your Product"
          />
          <SearchIcon className="searchBar__icon" />
        </form>
        <div className="searchBar__account">
          <p>Login</p>
          <AccountCircleOutlinedIcon />
        </div>
      </div>
    </>
  );
}

export default SearchBar;

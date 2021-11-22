import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/ProductDropdown.css";
import Product from "./Product";
import { Button } from "@mui/material";
import { SearchContext } from "../store/search-context";
import { BackdropContext } from "../store/backdrop-context";

function ProductDropdown() {
  const SearchCtx = useContext(SearchContext);
  console.log(SearchCtx);
  const BackdropCtx = useContext(BackdropContext);
  const history = useHistory();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://searchv7.expertrec.com/v6/search/eb17a931b1ab4950928cabbf42527715/?q=${SearchCtx.searchTerm}&size=6&suggestions=1&maxSuggestions=6`,
      {}
    )
      .then((res) => {
        console.log("132");
        res.json().then((data) => {
          console.log("231");
          console.log(data);
          setProducts(data.results);
        });
      })
      .catch((err) => {
        console.log("2");
        console.log(err);
      });
  }, [SearchCtx.searchTerm]);

  const allProductsHandler = () => {
    console.log("all products");
    BackdropCtx.setBackdrop(false);
    history.push(`/${SearchCtx.searchTerm}`);
  };

  return (
    <div className="dropdown">
      <h3 className="dropdown__related">Related Products:</h3>
      <div className="dropdown__products">
        {products.map((element) => (
          <Product key={element.id} info={element} />
        ))}
      </div>
      <div className="dropdown__btn">
        <Button variant="outlined" color="success" onClick={allProductsHandler}>
          View All Products
        </Button>
      </div>
    </div>
  );
}

export default ProductDropdown;

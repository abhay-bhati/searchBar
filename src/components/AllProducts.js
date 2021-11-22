import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "../styles/AllProducts.css";
import Product from "./Product";
import { SearchContext } from "../store/search-context";

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [totalCount, setTotalCount] = useState("");
  const SearchCtx = useContext(SearchContext);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(
      `https://searchv7.expertrec.com/v6/search/eb17a931b1ab4950928cabbf42527715/?q=${params.prod}&size=10&suggestions=4&maxSuggestions=6`,
      {}
    )
      .then((res) => {
        console.log("132");
        res.json().then((data) => {
          console.log("231");
          console.log(data);
          setAllProducts(data.results);
          setTotalCount(data.res.count);
        });
      })
      .catch((err) => {
        console.log("2");
        console.log(err);
      });
  }, [params.prod]);

  return (
    <>
      <p
        style={{
          marginLeft: "130px",
          marginTop: "45px",
          marginBottom: "27px",
          color: "gray",
        }}
      >
        {totalCount} results for '{params.prod}'
      </p>
      <hr style={{ width: "84%", margin: "5px auto" }} />
      <div className="allproducts">
        {allProducts.map((element) => (
          <Product key={element.id} info={element} />
        ))}
      </div>
    </>
  );
}

export default AllProducts;

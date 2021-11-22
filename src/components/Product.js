import React from "react";
import "../styles/Product.css";

function Product(props) {
  return (
    <div className="product">
      <img src={props.info.productimage} alt={props.info.categoryname} />
      <h3>{props.info.productname}</h3>
      <p>Rs {props.info.mrpprice}</p>
    </div>
  );
}

export default Product;

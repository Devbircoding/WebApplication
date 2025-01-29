import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./apiint.scss";
import Cart from "./cart";
import { Link } from "react-router-dom";

function ApiIntegration() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProducts(json.products);
      });
  }, []);

  return (
    <div>
      <center>
        <h1>Commercial Station X</h1>
        {/* <a href="localhost:3000/cart"> */}

        {/* </a> */}
      </center>
      <div className="products-container">
        {products.map((product) => (
          <div className="product">
            <img src={product.thumbnail} />
            <p>
              <b>{product.title}</b>
            </p>
            <p>${product.price}</p>
            <p>{product.rating}/5 Stars</p>
            <h5>{product.discountPercentage}% OFF!</h5>
            <Button variant="outline-success">
              <Link to={`/cart/${product.id}`}>Show Details</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ApiIntegration;

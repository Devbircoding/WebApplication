import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useHref, useParams } from "react-router-dom";
import "./cart.scss";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import Cartmain from "./cart2";

function Cart() {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("Fetched product:", json);
        setProduct(json);
      });
  }, [id]);

  const propAlert = () => {
    const minimumOrderQuantity = `${product.minimumOrderQuantity}`;
    if (count < minimumOrderQuantity) {
      alert(
        `You need to order at least ${product.minimumOrderQuantity} units of this product`
      );
    } else {
      window.location.href = "/checkout";
    }
  };
  return (
    <div className="product-in-cart">
      {product && (
        <>
          <img
            className="product-thumbnail"
            src={product.thumbnail}
            alt={product.title}
            style={{ width: "200px" }}
          />
          <div className="product-details">
            <h5>Product Details</h5>
            <p>
              <b>{product.title}</b>
            </p>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <p>{product.rating}/5 Stars</p>
            <p>{product.discountPercentage}%OFF</p>
            <p>
              You need to place {product.minimumOrderQuantity} Orders for this
              Product
            </p>
            <p>Tags: {product.tags}</p>
            <p>{product.shippingInformation}</p>

            <div className="product-quantity">
              <span>QTY</span>
              <Button variant="outline-success" onClick={increment}>
                +
              </Button>
              <span>{count}</span>
              <Button variant="outline-success" onClick={decrement}>
                -
              </Button>
            </div>

            <Nav.Link>
              <Button variant="outline-warning" onClick={propAlert}>
                Add To Cart
              </Button>
            </Nav.Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

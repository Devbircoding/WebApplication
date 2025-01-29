import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./cart2.scss";
function Cartmain() {
  const testing = "hello";
  const increment = "X";
  const decrement = "X";
  const PlaceOrder = () => {
    alert("Your Order Has been Placed! Thank you for buying from us!");
  };
  return (
    <center>
      <h1>Cart</h1>
      <div className="checkout-main">
        <div className="line-x">
          <div className="image-on-line">
            <img
              className="product-thumbnail"
              src="./build/images/testimg.jpeg"
              alt="IMAGE X"
            />
          </div>
          <div className="line-details">
            <span>ITEM X</span> <span>$X.00</span> <br />
            <span>SIZE</span> <span>X</span> <br />
            <span>QTY</span>{" "}
            <span>
              <Button variant="outline-success" onClick={increment}>
                +
              </Button>
              <span>X</span>
              <Button variant="outline-success" onClick={decrement}>
                -
              </Button>
            </span>{" "}
            <br />
          </div>
        </div>
        <div className="final-checkout">
          <span>TOTAL:</span> <span>$TOTAL.00</span>
          <div className="seperator">
            <span>
              <Button variant="outline-success">BUY</Button>
            </span>{" "}
          </div>
          <br />
        </div>
      </div>
    </center>
  );
}
export default Cartmain;

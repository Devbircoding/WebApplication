import React, { useState } from "react";
import "./details.scss";

function Details() {
  return (
    <div className="main-details">
      <h1>These are my Details</h1>

      <div className="detail-info">
        <p>
          Hi, my name is Devbir. I'm a 13 year old who loves things like
          developing, sports, maths, music and many more things. I develop in
          HTML, CSS, JS and React.js. I also know how to use Bootstrap and
          GitHub. i hope this let you know something about me!
        </p>
        <p>HTML portfoilio : https://devbircoding.github.io/Course/</p>
        <p>Email : devbir.bajaj@gmail.com</p>
        <p>Phone : +64 21 126 7373</p>
        <p>Github : Devbircoding</p>
      </div>
    </div>
  );
}
export default Details;

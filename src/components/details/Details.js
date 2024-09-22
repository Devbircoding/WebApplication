import React, { useState } from "react";
import "./details.scss";

function Details() {
  return (
    <center>
      <div className="main-details">
        <div className="detail-info">
          <img src="./images/betterphoto.jpeg"></img>
          <div className="all-info">
            <h2>Hi, I'm Devbir Bajaj,</h2> <h1>a Coding Enthusiast</h1>
            <p className="written-info">
              I am a 13 year old student who loves to code and create. I have
              worked with HTML, CSS, JS, Bootstrap, GitHub and React.js.
            </p>
            <p>
              <b>HTML portfoilio:</b> https://devbircoding.github.io/Course/
            </p>
            <p>
              <b>Email:</b> devbir.bajaj@gmail.com
            </p>
            <p>
              <b>Phone:</b> +64 21 126 7373
            </p>
            <p>
              <b>Github:</b> Devbircoding
            </p>
          </div>
        </div>
      </div>
    </center>
  );
}
export default Details;

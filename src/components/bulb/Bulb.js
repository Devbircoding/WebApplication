import React, { useState } from "react";
import "./bulb.scss";

function Bulb() {
  const [state, setState] = useState(true);

  return (
    <div className="maindiv">
      <p> The bulb is in the state of {state ? "True" : "False"}</p>
      {state ? <img src="./images/ON.png" /> : <img src="./images/OFF.png" />}
      <div className="onoff">
        <button onClick={() => setState(true)}>On</button>
        <button onClick={() => setState(false)}>Off</button>
      </div>
    </div>
  );
}
export default Bulb;

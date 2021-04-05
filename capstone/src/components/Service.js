import React from "react";
import Coach from "../images/coach.jpg";
import Replay from "../images/replay.jpg";

const Service = () => {
  return (
    <div className="container">
      <center>
        <h1>Service</h1>

        <h3>Coaching Session</h3>

        <img src={Coach} alt="coach" width="900px" height="500px" />
        <br />
        <h2 id="sale" className="btn-floating-large red pulse">
          HOT
        </h2>
        <div className="collection ">
          <a id="shroudService" href="#" className="collection-item">
            <span id="price" className="badge">
              $19.99/hr
            </span>
            Shroud
          </a>
          <a id="shroudService" href="#" className="collection-item">
            <span id="price" className="badge">
              $16.99/hr
            </span>
            Ninja
          </a>
          <a id="shroudService" href="#" className="collection-item">
            <span id="price" className="badge">
              $14.99/hr
            </span>
            XQC
          </a>
        </div>
        <h3>Watch Replays</h3>
        <img src={Replay} alt="replay" width="900px" height="500px" />
      </center>
    </div>
  );
};

export default Service;

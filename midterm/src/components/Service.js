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
        <h3>Watch Replays</h3>
        <img src={Replay} alt="replay" width="900px" height="500px" />
      </center>
    </div>
  );
};

export default Service;

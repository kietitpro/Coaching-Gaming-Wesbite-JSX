import React from "react";
import ninjaIcon from "../images/ninjaIcon.jpg";
import shroud from "../images/shroudIcon.jpg";
import xqc from "../images/xqc.jpg";

const About = () => {
  return (
    <div className="container">
      <h1 className="center-align">About Us</h1>
      <p>
        We analyze, watch replays give people coaching lessons. We have pros that will analyze your playstyle, give and advice and tips to help you improve your skills. We provide service base on players certain rank. We have services for all kinds of rank for games such as DOTA 2, CSGO, PUBG, FORTNITE, OVERWATCH, etc... We won't be able to litterally improve player's aim or their rank but we can help them achieve new rank by helping them improving their playstyle and their perspective.
      </p>
      <ul>
        <li>
          <img
            src={ninjaIcon}
            width="180px"
            height="130px"
            className="circle"
          />
          <span class="title">Ninja</span>
          <p>
            You can't just drop everything and focus on playing video games for
            a living!
          </p>
          <p>
            I like to focus on the coaching and understand what will be best for
            players to improve upon.
          </p>
        </li>
        <li>
          <img src={shroud} width="180px" height="130px" className="circle" />
          <span class="title">Shroud</span>
          <p>
            One of the best way to improve your skill is to watch your replays!
          </p>
          <p>Aiming isn't the only quality to be a good player.</p>
        </li>
        <li>
          <img src={xqc} width="180px" height="130px" className="circle" />
          <span class="title">XQC</span>
          <p>It doesn't always have to be about winning!</p>
          <p>To become a better player you must first learn how to have fun.</p>
        </li>
      </ul>
    </div>
  );
};

export default About;

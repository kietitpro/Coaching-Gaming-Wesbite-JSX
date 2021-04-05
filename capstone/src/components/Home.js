import React from "react";
import shroud from "../images/shroud.jpg";
import ninja from "../images/ninja.JPG";
import mouse from "../images/gamingMouse.png";
import keyboard from "../images/keyboard.png";
import coaching from "../images/coaching.jpg";
import replay from "../images/analyze.jpeg";
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1 className="center-align">Home</h1>
      <p>
        GameUp is a service that we want to provide for players that seem to
        stuck in their rank. We help people learn and understand the game better
        so they can reach to new heights.
      </p>
      <div class="row">
        <div className="col m6">
          <div className="card">
            <div className="card-image">
              <img src={shroud} alt="shroud" width="480px" height="700px" />
            </div>
            <div class="card-content">
              <p id="shroud">
                Michael "shroud" Grzesiek (born June 2, 1994) is a retired
                Canadian Counter-Strike: Global Offensive player of Polish
                descent. He is from Toronto, Ontario, but has since relocated to
                Orange County, California, in the United States. He is currently
                a Full-Time streamer on Mixer.
              </p>
            </div>
          </div>
        </div>
        <div className="col m6">
          <div className="card">
            <div className="card-image">
              <img src={ninja} alt="ninja" width="480px" height="700px" />
            </div>
            <div class="card-content">
              <p id="ninja">
                American Mixer streamer and professional eSports player Tyler
                Blevins, more commonly known by his online alias "Ninja", was
                born in Grayslake, Illinois, to Chuck and Cynthia Blevins. He
                starred in the A Gamer's Life (2016) as himself. It was his
                father, Chuck Blevins who introduced him to video games.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 id="service">Service</h2>

      <div class="row">
        <div className="col m6">
          <div className="card">
            <div className="card-image">
              <NavLink to="/service">
                <img src={coaching} alt="shroud" width="200px" height="400px" />
              </NavLink>
            </div>
            <div class="card-content">
              <p id="shroud">
                Michael "shroud" Grzesiek (born June 2, 1994) is a retired
                Canadian Counter-Strike: Global Offensive player of Polish
                descent. He is from Toronto, Ontario, but has since relocated to
                Orange County, California, in the United States. He is currently
                a Full-Time streamer on Mixer.
              </p>
            </div>
          </div>
        </div>
        <div className="col m6">
          <div className="card">
            <div className="card-image">
              <a href="">
                <NavLink to="/service">
                  <img src={replay} alt="ninja" width="200px" height="400px" />
                </NavLink>
              </a>
            </div>
            <div class="card-content">
              <p id="ninja">
                American Mixer streamer and professional eSports player Tyler
                Blevins, more commonly known by his online alias "Ninja", was
                born in Grayslake, Illinois, to Chuck and Cynthia Blevins. He
                starred in the A Gamer's Life (2016) as himself. It was his
                father, Chuck Blevins who introduced him to video games.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="products">
        <h3>Products</h3>
        <a
          href="https://www.amazon.com/s?k=gaming+keyboard&ref=nb_sb_noss_2"
          target="_blank"
        >
          <img src={mouse} alt="" width="200px" height="200px" />
        </a>
        <a
          href="https://www.amazon.com/s?i=aps&k=gaming%20mouse&ref=nb_sb_noss_2&url=search-alias%3Daps"
          target="_blank"
        >
          {" "}
          <img src={keyboard} alt="" width="300px" height="200px" />
        </a>
        <h5>Gaming Mouse Gaming Keyboard</h5>
      </div>
      <hr />
      <br></br>

      <hr />
      <h3 id="review">Reviews</h3>
      <div>
        <h4>Jason</h4>
        <h5>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </h5>

        <p>
          The experience was great. It was pretty easy to set up an account for
          your first time going. The quality was really great especially for how
          cheap it happened to be. The experience was great, the quality was
          good, and everything else was simple to set up. I highly recommend
          this place if your looking for an e-sports practice place after
          school, and I highly recommend going by just for an hour or two to
          enjoy yourself.
        </p>
        <h4>Brian</h4>
        <h5>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </h5>
        <p>
          This was an amazing experience for my friends and I when we sat down
          to play! A chill atmosphere and great staff made it a pleasure! Fun
          times to be had. We played Overwatch till closing time. :)
        </p>
        <h4>Plato</h4>
        <h5>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
        </h5>
        <p>
          So much fun! I’ve never been to a place like this before and visited
          on a whim. Mr.Tom the owner is so awesome I would recommend his
          business to anyone, as well as Mr.Shon who was very cool!!! I got a
          Christmas gift I won’t forget 😩Overall it was a nice experience and
          the computers ran great no internet issues or lag. The headsets and
          chairs were nice, comfortable and adjustable. Forgot to mention the
          dim lighting and great snack prices!
        </p>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import shroud from "../images/shroud.jpg";
import ninja from "../images/ninja.JPG";
import mouse from "../images/gamingMouse.png";
import keyboard from "../images/keyboard.png";

const Home = () => {
  return (
    <div className="container">
      <h1 className="center-align">Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
        repellat ipsa. Natus dignissimos nihil nam velit a laboriosam commodi
        officia eligendi iure necessitatibus odit quam tenetur reiciendis,
        libero, voluptatum magnam.
      </p>
      <div class="row">
        <div className="col m6">
          <div className="card">
            <div className="card-image">
              <img src={shroud} alt="shroud" width="480px" height="700px" />
            </div>
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
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
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

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

      <hr />
      <h2>Service</h2>
      <p>Professional CS:GO coaching session</p>
      <p>Analyze and give feedback</p>

      <hr />
      <h3>Reviews</h3>
      <div>
        <h4>Jason</h4>
        <h5>⭐⭐⭐⭐ ✰</h5>

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
        <h5>⭐⭐⭐⭐⭐</h5>
        <p>
          This was an amazing experience for my friends and I when we sat down
          to play! A chill atmosphere and great staff made it a pleasure! Fun
          times to be had. We played Overwatch till closing time. :)
        </p>
        <h4>Plato</h4>
        <h5>⭐⭐⭐ ✰ ✰</h5>
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

import React from "react"
import shroud from "../images/shroud.jpg"
import ninja from "../images/ninja.JPG"
import mouse from "../images/gamingMouse.png"
import keyboard from "../images/keyboard.png"

const Home = () => {
    return (

        <div className="container">

            <h2 className="center-align">Home</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt, repellat ipsa. Natus dignissimos nihil nam velit a laboriosam commodi officia eligendi iure
                necessitatibus odit quam tenetur reiciendis, libero, voluptatum magnam.</p>
            <div class="row">
                <div className="col m6">
                    <div className="card">
                        <div className="card-image">
                            <img src={shroud} alt="shroud" width="480px" height="700px" />
                        </div>
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
                <div className="col m6">
                    <div className="card">
                        <div className="card-image">
                            <img src={ninja} alt="ninja" width="480px" height="700px" />
                        </div>
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div>


        <h3>Products</h3>
        <img src={mouse} alt="" width="200px" height="200px"/>
        <img src={keyboard} alt="" width="300px" height="200px"/>
        <h5>Gaming Mouse Gaming Keyboard</h5>

        <h3>Service</h3>
        <p>Professional CS:GO coaching session</p>
        <p>Analyze and give feedback</p>
        

        

    <h3>Reviews</h3>

        </div >
    )
}

export default Home
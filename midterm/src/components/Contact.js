import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <center>
        <h1>Contact Us</h1>
      </center>
      <section class="section" id="contactUs">
        <form>
          <label>Name:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" placeholder="name@gmail.com" />
          <label>Message:</label>
          <textarea></textarea>
          <label>Phone: 202-555-0142</label>
          <br />
          <br />
          <input type="submit" id="submitBtn" value="Submit" />
        </form>
      </section>
    </div>
  );
};

export default Contact;

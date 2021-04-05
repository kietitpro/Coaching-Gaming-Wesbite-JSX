import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <center>
        <h1>Contact Us</h1>
      </center>
      <div className="row">
        <form className="col s12">
          <div className="input-field col s6">
            <input id="input" id="first_name" type="text" class="validate" />
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate" />
            <label for="last_name">Last Name</label>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <form action="#">
            <div className="file-field input-field">
              <div className="btn">
                <span>File</span>
                <input type="file" multiple />
              </div>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  placeholder="Upload one or more files"
                />
              </div>
            </div>
          </form>
          <textarea
            rows="5"
            cols="33"
            placeholder="Give us feedbacks"
          ></textarea>
        </form>
      </div>

      <div id="textColor">
        <center>
          <button
            type="button"
            className="btn btn-info btn-lg"
            data-toggle="modal"
            data-target="#myModal"
          >
            Submit
          </button>
        </center>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">
                  Thank you for your comments! We will get back to you shortly!
                </h4>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

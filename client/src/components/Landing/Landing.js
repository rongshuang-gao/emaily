import React from "react";

import "./Landing.css";

const Landing = () => {
  return (
    <main className="container hero">
      <div className="row">
        <div className="col s12 m6">
          <h1>Get feedback from your contacts</h1>
          <h5>
            Create and publish a survey with our easy-to-use online survey
            tools.
          </h5>
          <a
            className="btn btn-large btn-effect waves-light hero__cta"
            href="/auth/google"
          >
            Create A Survey
          </a>
        </div>
        <div className="col s12 m6">
          <div className="hero__image">
            <div className="email__header">
              <p>
                <b>To: </b>Customers
              </p>
              <p>
                <b>Subject: </b>We want to know how you think
              </p>
            </div>
            <div className="email__content">
              <h4>Do you like our new collection?</h4>
              <img
                src={require("./collection.jpeg")}
                className="email__image"
                alt="email"
              />
              <button className="btn email__button">Take the Survey</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;

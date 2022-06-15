import React from "react";

import LinkedinLogo from "./linkedin-big-logo-svgrepo-com.png";
import GithubLogo from "./github-svgrepo-com.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Emaily</h5>
            <p className="grey-text text-lighten-4">
              Personal project. No commercial use.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Contacts</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3 footer__link"
                  href="https://www.linkedin.com/in/ginny-gao/"
                  target="_blank"
                >
                  <img src={LinkedinLogo} alt="linkedin" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3 footer__link"
                  href="https://github.com/rongshuang-gao"
                  target="_blank"
                >
                  <img src={GithubLogo} alt="github" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">by Ginny Gao</div>
      </div>
    </footer>
  );
};

export default Footer;

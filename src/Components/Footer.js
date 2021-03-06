import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>
                Modified with love by<span> </span>
                <a
                  title="Instagram"
                  href="http://www.instagram.com/dev-thakku/"
                >
                  Jemshith T K
                </a>
                <span> </span>
                ♥️
              </li>
            </ul>

            <ul className="copyright">
              <li>
                &copy; All credit goes to Tim Baker - Copyright 2020 Tim Baker
              </li>
              <li>
                Design by <span> </span>
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

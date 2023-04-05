import React from "react";

function Footer() {
  return (
    <footer className="footer" style={{ position: 'relative', overflow: "hidden", backgroundImage: "linear-gradient(to right, #e66465, #9198e5)" }}>
      <div className="content has-text-centered has-text-white">
        <p>
          Built at <i className="fas fa-moon"></i> by{" "}
          <a href="https://github.com/pranayagra" className="has-text-white">
            <strong>Pranay Agrawal</strong>
          </a>
        </p>
        <p>
          <img
            width="512"
            height="96"
            src="https://bulma.io/images/made-with-bulma--semiwhite.png"
            className="bulma-image"
            alt=""
          />
        </p>
      </div>
    </footer>
  );
}

export default Footer;

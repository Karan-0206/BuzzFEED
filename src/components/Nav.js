import React, { useEffect, useState } from "react";

function Nav() {
  const [transparency, show] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        show(true);
      } else {
        show(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${transparency && "nav__blackout"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix_logo"
      />
      <img
        className="nav__login"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="netflix_login"
      />
    </div>
  );
}

export default Nav;

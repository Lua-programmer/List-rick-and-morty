import React from "react";

const Header = ({title}) => {
  return (
    <header>
      <nav className="nav">
        <div>
          <a href="/">{title}</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";

function Header ({centerStyle}) {

  return (
    <header style={centerStyle} className="header" >
      <div className="header-outline"></div>
      <h1>TL Buildworks</h1>
    </header>
  );
}

export default Header;
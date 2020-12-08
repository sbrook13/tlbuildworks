import React from "react";

function Header ({centerStyle}) {

  return (
    <header style={centerStyle} className="header" >
      <div className="header-outline"></div>
      <img src="../../TLBuildworks_black_on_white_logo.jpg" height="200px" width="200px" alt="TL Buildworks logo"/>
    </header>
  );
}

export default Header;
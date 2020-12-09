import React from "react";

function Header ({centerStyle}) {

  return (
    <header style={centerStyle} className="header" >
      <div className="header-outline"></div>
      <img src="../../TL_Buildworks_solid_logo.svg" height="300vh" width="300vw" alt="TLB Buildworks logo"/>
    </header>
  );
}

export default Header;
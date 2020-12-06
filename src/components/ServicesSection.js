import React from "react";

function ServicesSection({rowStyle, blockStyle, photoStyle, outlineStyle}) {

  return (
    <div style={rowStyle}>
      <div className="photo-1" style={photoStyle}>
        <div style={outlineStyle}></div>
      </div>
      <div style={blockStyle}>
        <h2>Services</h2>
      </div>
    </div>
  );
}

export default ServicesSection;
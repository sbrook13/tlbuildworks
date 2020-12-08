import React from "react";

function ServicesSection({rowStyle, blockStyle, photoStyle, outlineStyle}) {

  return (
    <div style={rowStyle}>
      <div className="photo-1" style={photoStyle}>
        <div style={outlineStyle} style={blockStyle}>
          <h1>SERVICES</h1>
        </div>
      </div>
      <div style={blockStyle}>
        <h2>We work with you to design custom projects on a budget.</h2>
        <ul>
          <li>Basement Finishing</li>
          <li>Kitchen Remodeling</li>
          <li>Bathroom Remodels</li>
          <li>Decks and Railings</li>
          <li>Specialty Projects</li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesSection;
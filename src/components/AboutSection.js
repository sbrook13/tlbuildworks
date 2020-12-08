import React from "react";

function AboutSection({rowStyle, blockStyle, photoStyle, outlineStyle}) {

  return (
    <div style={rowStyle}>
      <div className="photo-troy" style={photoStyle}>
        <div style={outlineStyle} style={blockStyle}>
          <h1>ABOUT US</h1>
        </div>
      </div>
      <div style={blockStyle}>
        <h2>Simply the BEST</h2>
        <p>Founded in 2015, Troy Larabee is a fascinating human being and has created beautiful spaces for lovely people for over five years.</p>
      </div>
    </div>
  );
}

export default AboutSection;
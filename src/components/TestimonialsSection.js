import React from "react";

function TestimonialsSection({rowStyle, blockStyle, photoStyle, outlineStyle}) {

  return (
    <div style={rowStyle}>
      <div style={blockStyle}>
        <h2>Testimonials</h2>
      </div>
      <div className="photo-2" style={photoStyle}>
        <div style={outlineStyle} style={blockStyle}>
          <h1>QUALITY WORK</h1>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
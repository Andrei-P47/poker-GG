import React from "react";
import "./buttonGradient.css";

function ButtonGradient({ text, className, textStyle }: any) {
  return (
    <button className={`flex ${className}`}>
      <span
        className={`ethnocentric ${textStyle}`}
        dangerouslySetInnerHTML={{ __html: text }}
      ></span>
    </button>
  );
}

export default ButtonGradient;

import React from "react";

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="17"
      height="17"
      fill="none"
      className="m-auto my-1"
    >
      <path fill="url(#a)" d="M0 0h17v21H0z"></path>
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="matrix(.01 0 0 .0081 0 .095)" xlinkHref="#b"></use>
        </pattern>
        <image
          id="b"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default XIcon;
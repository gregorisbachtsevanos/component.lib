import * as React from "react";
import { SVGProps } from "react";
const SvgRefresh = (props: SVGProps<SVGSVGElement> | any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 50 50"
    style={{
      enableBackground: "new 0 0 50 50",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="#6672FA"
      d="M43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);
export default SvgRefresh;

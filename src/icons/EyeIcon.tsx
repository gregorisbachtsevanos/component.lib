import * as React from 'react';
import { SVGProps } from 'react';
const SvgEyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <path d="M12.01 20C6.945 20 2.424 15.789 0 11.576 2.418 7.473 6.943 4 12.01 4c5.135 0 9.635 3.453 11.999 7.564C21.768 15.994 17.283 20 12.01 20zM1.168 11.584C2.011 12.915 6.186 19 12.01 19c6.305 0 10.112-6.103 10.851-7.405C22.089 10.397 18.255 5 12.01 5 5.894 5 1.985 10.355 1.168 11.584zM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z" />
  </svg>
);
export default SvgEyeIcon;

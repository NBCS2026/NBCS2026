import { SVGProps } from "react";

export function GoToArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.445"
        y="0.445"
        width="41.83"
        height="41.83"
        rx="20.915"
        fill="black"
        fillOpacity="0.01"
      />
      <rect
        x="0.445"
        y="0.445"
        width="41.83"
        height="41.83"
        rx="20.915"
        stroke="url(#paint0_radial_54617_2638)"
        strokeWidth="0.89"
      />
      <path
        d="M27.2924 15.4258L15.4258 27.2924"
        stroke="white"
        strokeWidth="1.78"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6133 15.4258H27.2933V26.1058"
        stroke="white"
        strokeWidth="1.78"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <radialGradient
          id="paint0_radial_54617_2638"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(19.0658 53.4 -3.00036 19.0658 1.10756 -7.67625)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8C0C3A" />
          <stop offset="1" stopColor="#D5D5D5" />
        </radialGradient>
      </defs>
    </svg>
  );
}

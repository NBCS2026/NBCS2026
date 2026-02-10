interface ArrowProps extends React.HTMLAttributes<SVGElement> {
  className?: string;
}

export function Arrow({ className = "text-[#FBFAFA]" }: ArrowProps) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.6667 9.3335L9.33334 22.6668"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 9.3335H22.6667V21.3335"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface IconProps {
  className?: string;
}

/**
 * LinkedIn icon (inline SVG since lucide-react does not include brand icons).
 */
const LinkedInIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 10.5c0-.3-.1-.5-.3-.7s-.5-.3-.8-.3-1 .1-1.5.6S1 11.2 1 12s-.3 1.3.6 1.9 1.6 1 2.2.3 1-1.1 1-1.9v-1.5c0-.3-.1-.5-.3-.7s-.5-.3-.8-.3-1 .1-1.5.6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 13.5h2.5c.3 0 .5-.2.5-.5V10c0-.3-.2-.5-.5-.5h-2v5zm7.5-5c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5h-2zm.5 3v-1.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V13c0 .3.2.5.5.5h1z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LinkedInIcon;

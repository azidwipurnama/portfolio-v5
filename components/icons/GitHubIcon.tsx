interface IconProps {
  className?: string;
}

/**
 * GitHub icon (inline SVG since lucide-react does not include brand icons).
 */
const GitHubIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 19c-4.3 .2-4.3-.05-5-1.5v-2.5c0-1.4-.1-2.8-1.3-4 .2-.4 1-1 .5-2C2.2 7.5 3.5 4.8 6 3.5 6.7 3.3 7.5 3 8 2.5c1-1 2-1.5 3.5-1.5 1.5 0 3 .5 4 1.5.5.5 1.3 1.2 1.5 1.7 2.5 1.7 3.8 4.4 3.5 8.5 0 1.3 0 2.5-.5 3.5-1 2-2 3.5-4 4-1 .3-2 .5-3 .3 0 0 0 .5 0 0c0 0 0 .5 0 1 0 .5-.5 1-.5 1.5 0 1-1 2-1 3 0 1-.5 2-1 2.5 0 1 0 2 0 3 0 .5-.5 1-1 1.5-1.5 0-1 0-2 0-3 .5-1 1-2 1-3 0-1 0-2 0-3 0-1 0-2 0-3 0-1 0-2 0-3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default GitHubIcon;

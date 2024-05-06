interface TickProps {
  className?: string;
}

const Tick: React.FC<TickProps> = ({ className }) => (
  <svg
    width="15"
    height="13"
    viewBox="0 0 15 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7551 6.14804L0.505123 0.898045C0.169124 0.773845 -0.133126 1.14689 0.0581236 1.45004L3.24232 6.50009L0.0581236 11.55C-0.132526 11.853 0.169124 12.2254 0.505123 12.1017L14.7551 6.8517C14.9231 6.78584 14.9993 6.67424 14.999 6.49979C14.9989 6.32534 14.9015 6.20129 14.7551 6.14804ZM12.5231 6.12479L3.89212 6.12479L1.28107 1.98329L12.5231 6.12479Z"
      fill="#0FA958"
    />
  </svg>
);

export default Tick;

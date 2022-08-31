import { IconProps } from ".";

export default function IconMinus({
  color,
  width = 18,
  height = 18,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0058 7.90015H2.50583C1.88462 7.90015 1.38083 8.40394 1.38083 9.02515V10.1501C1.38083 10.7714 1.88462 11.2751 2.50583 11.2751H16.0058C16.627 11.2751 17.1308 10.7714 17.1308 10.1501V9.02515C17.1308 8.40394 16.627 7.90015 16.0058 7.90015Z"
        fill={color === "black" ? "#000" : "#FFF"}
      />
    </svg>
  );
}

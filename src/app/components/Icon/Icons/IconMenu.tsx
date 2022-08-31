import { IconProps } from ".";

export default function IconMenu({
  color,
  width = 23,
  height = 16,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 15.0154H22.5V12.5128H0V15.0154ZM0 8.75904H22.5V6.25647H0V8.75904ZM0 0V2.50257H22.5V0H0Z"
        fill={color === "black" ? "#000" : "#FFF"}
      />
    </svg>
  );
}
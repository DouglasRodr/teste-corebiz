import { IconProps } from ".";

export default function IconArrowLeft({
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
        d="M7.26611 9.0038L13.9999 2.26976C14.1853 2.08478 14.2873 1.83746 14.2873 1.57376C14.2873 1.3099 14.1853 1.06273 13.9999 0.877463L13.4098 0.287707C13.2247 0.102146 12.9772 0 12.7135 0C12.4498 0 12.2027 0.102146 12.0174 0.287707L3.99977 8.30517C3.81377 8.49102 3.71192 8.73937 3.71265 9.00337C3.71192 9.26854 3.81363 9.51659 3.99977 9.70259L12.0099 17.7123C12.1952 17.8979 12.4424 18 12.7062 18C12.9699 18 13.2171 17.8979 13.4025 17.7123L13.9924 17.1225C14.3763 16.7387 14.3763 16.1138 13.9924 15.7301L7.26611 9.0038Z"
        fill={color === "black" ? "#000" : "#FFF"}
      />
    </svg>
  );
}
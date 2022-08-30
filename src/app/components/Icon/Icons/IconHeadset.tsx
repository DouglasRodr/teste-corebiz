import { IconProps } from ".";

export default function IconHeadset({
  color,
  width = 16,
  height = 19,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.16881 0.133301C3.97336 0.133301 0.571411 3.53641 0.571411 7.7333V13.6444C0.571411 15.0462 1.70258 16.1777 3.10388 16.1777H5.63635V9.42219H2.25972V7.7333C2.25972 4.4653 4.90193 1.82219 8.16881 1.82219C11.4357 1.82219 14.0779 4.4653 14.0779 7.7333V9.42219H10.7013V16.1777H14.0779V17.0222H8.16881V18.7111H13.2337C14.635 18.7111 15.7662 17.5795 15.7662 16.1777V7.7333C15.7662 3.53641 12.3643 0.133301 8.16881 0.133301Z"
        fill={color === "black" ? "#000" : "#FFF"}
      />
    </svg>
  );
}

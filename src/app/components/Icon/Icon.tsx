import { IconColor, IconType } from ".";
import { IconMenu, IconUser } from "./Icons";
import * as I from "./Icon.styles";

export interface IconProps {
  icon: IconType;
  color: IconColor;
  width?: number;
  height?: number;
}

const getIcon = (color: IconColor, width?: number, height?: number) => ({
  menu: <IconMenu width={width} height={height} color={color} />,
  user: <IconUser width={width} height={height} color={color} />,
});

export default function Icon({ icon, color, width, height }: IconProps) {
  return <I.Wrapper>{getIcon(color, width, height)[icon]}</I.Wrapper>;
}

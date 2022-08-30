import { IconColor, IconType } from ".";
import { IconArrowLeft, IconArrowRight, IconCart, IconMail, IconMenu, IconSearch, IconUser } from "./Icons";
import * as I from "./Icon.styles";
import IconHeadset from "./Icons/IconHeadset";

export interface IconProps {
  icon: IconType;
  color: IconColor;
  width?: number;
  height?: number;
}

const getIcon = (color: IconColor, width?: number, height?: number) => ({
  arrowLeft: <IconArrowLeft width={width} height={height} color={color} />,
  arrowRight: <IconArrowRight width={width} height={height} color={color} />,
  cart: <IconCart width={width} height={height} color={color} />,
  headset: <IconHeadset width={width} height={height} color={color} />,
  mail: <IconMail width={width} height={height} color={color} />,
  menu: <IconMenu width={width} height={height} color={color} />,
  search: <IconSearch width={width} height={height} color={color} />,
  user: <IconUser width={width} height={height} color={color} />,
});

export default function Icon({ icon, color, width, height }: IconProps) {
  return <I.Wrapper>{getIcon(color, width, height)[icon]}</I.Wrapper>;
}

import IconCart from "./IconCart";
import IconHeadset from "./IconHeadset";
import IconMail from "./IconMail";
import IconMenu from "./IconMenu";
import IconSearch from "./IconSearch";
import IconUser from "./IconUser";
import { IconColor } from "..";

export { IconCart, IconHeadset, IconMail, IconMenu, IconSearch, IconUser };

export interface IconProps {
  color: IconColor;
  width?: number;
  height?: number;
}

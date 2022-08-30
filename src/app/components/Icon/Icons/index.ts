import IconCart from "./IconCart";
import IconMenu from "./IconMenu";
import IconSearch from "./IconSearch";
import IconUser from "./IconUser";
import { IconColor } from "..";

export { IconCart, IconMenu, IconSearch, IconUser };

export interface IconProps {
  color: IconColor;
  width?: number;
  height?: number;
}

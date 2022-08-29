import IconMenu from "./IconMenu";
import IconUser from "./IconUser";
import { IconColor } from "..";

export { IconMenu, IconUser };

export interface IconProps {
  color: IconColor;
  width?: number;
  height?: number;
}

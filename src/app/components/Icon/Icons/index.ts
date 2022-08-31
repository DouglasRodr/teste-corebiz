import IconArrowLeft from "./IconArrowLeft";
import IconArrowRight from "./IconArrowRight";
import IconCart from "./IconCart";
import IconClose from "./IconClose";
import IconHeadset from "./IconHeadset";
import IconMail from "./IconMail";
import IconMenu from "./IconMenu";
import IconRemove from "./IconRemove";
import IconSearch from "./IconSearch";
import IconUser from "./IconUser";
import { IconColor } from "..";

export {
  IconArrowLeft,
  IconArrowRight,
  IconCart,
  IconClose,
  IconHeadset,
  IconMail,
  IconMenu,
  IconRemove,
  IconSearch,
  IconUser,
};

export interface IconProps {
  color: IconColor;
  width?: number;
  height?: number;
}

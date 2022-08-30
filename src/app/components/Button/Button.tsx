import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Icon, { IconType } from "../Icon";
import * as B from "./Button.styles";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
  icon?: IconType;
  variant?: "primary" | "secondary";
  size?: "small" | "normal" | "large";
  loading?: boolean;
}

export default function Button({
  label,
  icon,
  variant = "primary",
  size = "normal",
  loading = false,
  ref,
  ...props
}: ButtonProps) {
  return (
    <B.Wrapper
      {...props}
      disabled={loading || props.disabled}
      variant={variant}
      size={size}
      isOnlyIcon={label ? false : true}
    >
      {icon && !loading && (
        <Icon icon={icon} color={variant === "primary" ? "white" : "black"} />
      )}
      {loading && <B.Loading />}
      {label}
    </B.Wrapper>
  );
}

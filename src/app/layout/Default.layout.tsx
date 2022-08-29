import { Fragment } from "react";

export interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return <Fragment>{children}</Fragment>;
}

import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

export interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Fragment>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Fragment>
  );
}

const Content = styled.section`
  min-height: calc(100vh - 80px - 392px);

  @media (min-width: 992px) {
    min-height: calc(100vh - 80px - 224px);
  }
`;

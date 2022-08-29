import * as L from "./Logo.styles";
import logoCorebiz from "../../assets/logo-corebiz.svg";

export default function Logo() {
  return (
    <L.Wrapper>
      <img src={logoCorebiz} alt="Corebiz" />
    </L.Wrapper>
  );
}

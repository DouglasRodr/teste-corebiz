import * as F from "./Footer.styles";
import logoCorebiz from "../../assets/logo-footer-corebiz.svg";
import logoVtex from "../../assets/logo-footer-vtex.svg";
import SectionTitle from "../SectionTitle";

export default function Footer() {
  return (
    <F.Wrapper>
      <F.Container>
        <F.Info>
          <SectionTitle text="Localização" variant="secondary" />
          <F.Location>
            <span>Avenida Andrômeda, 2000. Bloco 6 e 8</span>
            <span>Alphavile SP</span>
            <span>brasil@corebiz.ag</span>
            <span>+55 11 3090 1039</span>
          </F.Location>
        </F.Info>
        <F.Contact>
          <a href="mailto:wandersondouglasr@gmail.com">
            <F.ContactButton
              icon="mail"
              label="Entre em Contato"
              variant="secondary"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5587988041999"
            target="_blank"
            rel="noreferrer"
          >
            <F.ContactButton
              icon="headset"
              label="Fale com o Nosso Consultor Online"
              variant="secondary"
            />
          </a>
        </F.Contact>
        <F.Realization>
          <F.LogoCorebiz href="https://www.corebiz.ag/pt/" target="_blank">
            <span>Created By</span>
            <img src={logoCorebiz} alt="Corebiz" />
          </F.LogoCorebiz>
          <F.LogoVtex href="https://vtex.com/br-pt" target="_blank">
            <span>Powered By</span>
            <img src={logoVtex} alt="VTEX" />
          </F.LogoVtex>
        </F.Realization>
      </F.Container>
    </F.Wrapper>
  );
}

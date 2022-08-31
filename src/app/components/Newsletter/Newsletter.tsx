import * as N from "./Newsletter.styles";

export default function Newsletter() {
  return (
    <N.Wrapper>
      <N.Container>
        <N.Title>Participe de nossas news com promoções e novidades!</N.Title>
        <N.Form>
          <N.NewsletterInput placeholder="Digite seu nome" />
          <N.NewsletterInput placeholder="Digite seu e-mail" />
          <N.NewsletterButton label="Eu quero!" size="large" />
        </N.Form>
      </N.Container>
    </N.Wrapper>
  );
}

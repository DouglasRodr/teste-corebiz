import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Newsletter } from "../../../core/@types";
import useNewsletter from "../../../core/hooks/useNewsletter";
import * as N from "./NewsletterForm.styles";

export default function NewsletterForm() {
  const { subscribeNewsletter, loading, success, newSubscribe } =
    useNewsletter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Newsletter.Input>();

  function onFormSubmit(data: Newsletter.Input) {
    subscribeNewsletter(data);
  }

  return (
    <N.Wrapper>
      <N.Container>
        {!success ? (
          <Fragment>
            <N.Title>
              Participe de nossas news com promoções e novidades!
            </N.Title>
            <N.Form onSubmit={handleSubmit(onFormSubmit)}>
              <N.NewsletterInputGroup>
                <N.NewsletterInput
                  placeholder="Digite seu nome"
                  type="text"
                  {...register("name", {
                    required: "Preencha com seu nome completo",
                  })}
                  isInvalid={!!errors.name}
                  disabled={loading}
                />
                <N.ErrorMessage>{errors.name?.message}</N.ErrorMessage>
              </N.NewsletterInputGroup>
              <N.NewsletterInputGroup>
                <N.NewsletterInput
                  placeholder="Digite seu e-mail"
                  type="text"
                  {...register("email", {
                    required: "Preencha com seu e-mail",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Preencha com um e-mail válido",
                    },
                  })}
                  isInvalid={!!errors.email}
                  disabled={loading}
                />
                <N.ErrorMessage>{errors.email?.message}</N.ErrorMessage>
              </N.NewsletterInputGroup>
              <N.NewsletterButton
                label="Eu quero!"
                size="large"
                loading={loading}
              />
            </N.Form>
          </Fragment>
        ) : (
          <N.SuccessContainer>
            <N.SuccessTitle>
              <h3>Seu e-mail foi cadastrado com sucesso!</h3>
              <span>
                A partir de agora você receberá as novidade e ofertas
                exclusivas.
              </span>
            </N.SuccessTitle>
            <N.ResetFormButton
              label="Cadastrar novo e-mail"
              size="large"
              onClick={() => {
                reset();
                newSubscribe();
              }}
            />
          </N.SuccessContainer>
        )}
      </N.Container>
    </N.Wrapper>
  );
}

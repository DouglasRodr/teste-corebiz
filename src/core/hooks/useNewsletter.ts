import { useCallback, useState } from "react";
import { NewsletterService } from "../../service";
import { Newsletter } from "../@types";

export default function useNewsletter() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const subscribeNewsletter = useCallback(async function (
    input: Newsletter.Input
  ) {
    setLoading(true);
    await NewsletterService.subscribe(input)
      .then(() => {
        setSuccess(true);
      })
      .finally(() => setLoading(false));
  },
  []);

  const newSubscribe = function () {
    setSuccess(false);
  };

  return {
    loading,
    success,
    subscribeNewsletter,
    newSubscribe,
  };
}

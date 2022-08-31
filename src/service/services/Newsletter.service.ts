import { Newsletter } from "../../core/@types";
import Service from "../Service";

export default class NewsletterService extends Service {
  static subscribe(newsletter: Newsletter.Input) {
    return this.Http.post<Newsletter.Input>(
      "/api/v1/newsletter",
      newsletter
    ).then(this.getData);
  }
}

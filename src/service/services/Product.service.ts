import { Product } from "../../core/@types";
import Service from "../Service";

export default class ProductService extends Service {
  static getAllProducts() {
    return this.Http.get<Product.Summary[]>("/api/v1/products").then(
      this.getData
    );
  }
}

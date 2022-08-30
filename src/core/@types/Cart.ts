import { Product } from ".";

export namespace Cart {
  export type Item = {
    id: number;
    product: Product.Summary;
    quantity: number;
  };
}

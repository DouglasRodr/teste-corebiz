export namespace Product {
  export type Installment = {
    quantity: number;
    value: number;
  };

  export type Summary = {
    productId: number;
    productName: string;
    stars: number;
    imageUrl: string;
    listPrice: number;
    price: number;
    installments: Installment[];
  };
}

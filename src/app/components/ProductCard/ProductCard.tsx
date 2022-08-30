import { Product } from "../../../service/@types";
import * as P from "./ProductCard.styles";

export interface ProductCardProps {
  product: Product.Summary;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <P.Wrapper>
      {product.listPrice && (
        <P.Tag>
          <span>OFF</span>
        </P.Tag>
      )}
      <P.Image src={product.imageUrl} alt={product.productName} />
      <P.Details>
        <P.Title>{product.productName}</P.Title>
        <P.RatingWrapper>
          <span>*****</span>
        </P.RatingWrapper>
        <P.ListPriceWrapper>
          {product.listPrice && <span>{`de ${product.listPrice}`}</span>}
        </P.ListPriceWrapper>
        <P.PriceWrapper>
          <span>{`por ${product.price}`}</span>
        </P.PriceWrapper>
        <P.InstallmentsWrapper>
          {product.installments && product.installments.length > 0 && (
            <span>{`ou em ${product.installments[0].quantity}x de ${product.installments[0].value}`}</span>
          )}
        </P.InstallmentsWrapper>
        <P.BuyButton>Comprar</P.BuyButton>
      </P.Details>
    </P.Wrapper>
  );
}

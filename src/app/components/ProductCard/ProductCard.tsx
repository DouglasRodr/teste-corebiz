import formatToCurrency from "../../../core/utils/formatToCurrency";
import { Product } from "../../../service/@types";
import StarsRating from "../StarsRating";
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
          <StarsRating rating={product.stars} />
        </P.RatingWrapper>
        <P.ListPriceWrapper>
          {product.listPrice && (
            <span>{`de ${formatToCurrency(product.listPrice)}`}</span>
          )}
        </P.ListPriceWrapper>
        <P.PriceWrapper>
          <span>{`por ${formatToCurrency(product.price)}`}</span>
        </P.PriceWrapper>
        <P.InstallmentsWrapper>
          {product.installments && product.installments.length > 0 && (
            <span>{`ou em ${
              product.installments[0].quantity
            }x de ${formatToCurrency(product.installments[0].value)}`}</span>
          )}
        </P.InstallmentsWrapper>
        <P.BuyButton>Comprar</P.BuyButton>
      </P.Details>
    </P.Wrapper>
  );
}

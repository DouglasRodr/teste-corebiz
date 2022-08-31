import { Cart } from "../../../core/@types";
import * as C from "./CartItem.styles";
import formatToCurrency from "../../../core/utils/formatToCurrency";
import StarsRating from "../StarsRating";
import { useShoppingCart } from "../../../core/hooks/useShoppingCart";
import Icon from "../Icon";

interface CartItemProps {
  cartItem: Cart.Item;
}

export default function CartItem({ cartItem }: CartItemProps) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useShoppingCart();
  return (
    <C.Wrapper>
      <C.ImageWrapper>
        <img
          src={cartItem.product.imageUrl}
          alt={cartItem.product.productName}
        />
      </C.ImageWrapper>
      <C.InfoWrapper>
        <C.Header>
          <C.Info>
            <h3>{cartItem.product.productName}</h3>
            <StarsRating rating={cartItem.product.stars} />
          </C.Info>
          <C.RemoveButton
            onClick={() => {
              removeFromCart(cartItem.product);
            }}
          >
            <Icon icon="remove" color="black" />
          </C.RemoveButton>
        </C.Header>
        <C.Details>
          <C.QuantitySelector>
            <C.QuantitySelectorButton
              onClick={() => {
                decreaseQuantity(cartItem.product);
              }}
            >
              <Icon icon="minus" color="black" width={12} height={12} />
            </C.QuantitySelectorButton>
            <p>{cartItem.quantity}</p>
            <C.QuantitySelectorButton
              onClick={() => {
                increaseQuantity(cartItem.product);
              }}
            >
              <Icon icon="plus" color="black" width={12} height={12} />
            </C.QuantitySelectorButton>
          </C.QuantitySelector>
          <C.Totals>
            <C.UnitPrice>
              {`${cartItem.quantity} x ${formatToCurrency(
                cartItem.product.price
              )}`}
            </C.UnitPrice>
            <C.TotalPrice>
              {formatToCurrency(cartItem.quantity * cartItem.product.price)}
            </C.TotalPrice>
          </C.Totals>
        </C.Details>
      </C.InfoWrapper>
    </C.Wrapper>
  );
}

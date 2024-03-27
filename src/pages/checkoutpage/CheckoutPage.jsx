import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { useSelector } from "react-redux";
import "./CheckoutPage.scss";
import { selectCartItems } from "../../redux-rtk/features/cart/cartSelector";
import { selectCartTotal } from "../../redux-rtk/features/cart/cartSelector";
import StripeButton from "../../components/stripe-button/StripeButton";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <StripeButton price={total} />
    </div>
  );
};

export default CheckoutPage;

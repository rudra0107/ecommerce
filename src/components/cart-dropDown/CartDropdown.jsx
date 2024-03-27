import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../custom-button/CustomButton";
import { useSelector } from "react-redux";
import CartItem from "../cart-Item/CartItem";
import { selectCartItems } from "../../redux-rtk/features/cart/cartSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../redux-rtk/features/cart/cartSlice";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <>
          <div className="cart-items">
            {cartItems.map((cartItem) => {
              return <CartItem key={cartItem.id} item={cartItem} />;
            })}
          </div>
          <CustomButton
            onClick={() => {
              navigate("/checkout");
              dispatch(toggleCart());
            }}
          >
            CHECKOUT
          </CustomButton>
        </>
      ) : (
        <>
          <div>Your cart is empty</div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;

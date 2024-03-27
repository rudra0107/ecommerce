import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";
import { toggleCart } from "../../redux-rtk/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCartItemsCounts } from "../../redux-rtk/features/cart/cartSelector";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCounts);
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;

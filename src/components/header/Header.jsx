import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropDown/CartDropdown";
import { selectCartHidden } from "../../redux-rtk/features/cart/cartSelector";
import { selectCurrentUser } from "../../redux-rtk/features/user/userSelector";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  // console.log(currentUser);
  const showCartDropdown = useSelector(selectCartHidden);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={async () => {
              try {
                await signOut(auth);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGNIN
          </Link>
        )}
        <CartIcon />
      </div>
      {showCartDropdown ? null : <CartDropdown />}
    </div>
  );
};

export default Header;

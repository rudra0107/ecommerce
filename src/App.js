// import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import "./App.css";
import Header from "./components/header/Header";
import SigninandSignupPage from "./pages/sign-in-and-sign-up-page/SigninandSignupPage";
import React, { useEffect } from "react";
import { auth, CreateUserProfileDocument } from "./firebase/firebase";
import { onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "./redux-rtk/features/user/userSlice";
import CheckoutPage from "./pages/checkoutpage/CheckoutPage";
// import

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribedFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const UserDocumentRef = CreateUserProfileDocument(userAuth);

        UserDocumentRef.then((res) => {
          onSnapshot(res, (doc) => {
            dispatch(setUser({ id: doc.id, ...doc.data() }));
          });
        });
      } else {
        dispatch(setUser(null));
      }
    });

    return () => {
      unSubscribedFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop/*" element={<ShopPage />} />
        <Route exact path="/signin" element={<SigninandSignupPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
};

export default App;

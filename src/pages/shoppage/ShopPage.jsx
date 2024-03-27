import React from "react";
import CollectionOverview from "../../components/collection-overview/collectionOverview";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import CollectionPage from "../collectionpage/CollectionPage";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route exact path={`/`} element={<CollectionOverview />} />
        <Route exact path={`/:collectionId`} element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;

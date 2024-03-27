import React from "react";
import "./CollectionPage.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectCollection } from "../../redux-rtk/features/shop/shopSelector";

const CategoryPage = () => {
  const params = useParams();
  console.log(params.collectionId);
  const data = useSelector(selectCollection(params.collectionId));
  const { title, items } = data;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return (
            <>
              <div className="collection-item">
                <CollectionItem item={item} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;

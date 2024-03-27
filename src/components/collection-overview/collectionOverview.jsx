import React from "react";
import "./collectionOverview.scss";
import PreviewCollection from "../preview-collections/PreviewCollection";
import { useSelector } from "react-redux";
// import { selectShopItems } from "../../redux-rtk/features/shop/shopSelector";
import { selectCollectionsForPreview } from "../../redux-rtk/features/shop/shopSelector";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  console.log(collections);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...collection }) => (
        <PreviewCollection key={id} {...collection} />
      ))}
    </div>
  );
};

export default CollectionOverview;

import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ScrapProductCard = ({ scrapProduct }) => {
  const options = {
    value: scrapProduct.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/scrap-product/${scrapProduct._id}`}>
      <img src={scrapProduct.images[0].url} alt={scrapProduct.name} />
      <p>{scrapProduct.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({scrapProduct.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`$${scrapProduct.price}`}</span>
    </Link>
  );
};

export default ScrapProductCard;

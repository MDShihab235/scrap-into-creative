import React, { Fragment } from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartItemCard = ({ item, deleteCartItems }) => {
  const { products } = useSelector((state) => state.scrapProducts);
  return (
    <Fragment>
      {item.product === products ? (
        <div className="CartItemCard">
          <img src={item.image} alt="ssa" />
          <div>
            <Link to={`/scrap-product/${item.product}`}>{item.name}</Link>
            <span>{`Price: $${item.price}`}</span>
            <p onClick={() => deleteCartItems(item.product)}>Remove</p>
          </div>
        </div>
      ) : (
        <div className="CartItemCard">
          <img src={item.image} alt="ssa" />
          <div>
            <Link to={`/product/${item.product}`}>{item.name}</Link>
            <span>{`Price: $${item.price}`}</span>
            <p onClick={() => deleteCartItems(item.product)}>Remove</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CartItemCard;

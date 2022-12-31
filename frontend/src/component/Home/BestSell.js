import React from "react";
import { useSelector } from "react-redux";
import { Rating } from "@material-ui/lab";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrders } from "../../actions/orderAction";
import "./Home.css";

const BestSell = ({ order }) => {
  const { products } = useSelector((state) => state.products);
  console.log(order.orderItems[0].product);
  console.log(products);
  const orderItem = order.orderItems;
  const newOrderItem = [...new Set(orderItem)];
  // const product = products.find(
  //   (product) => product._id === order.orderItems[0].product
  // );
  // const dispatch = useDispatch();
  // const options = {
  //   value: product.ratings,
  //   readOnly: true,
  //   precision: 0.5,
  // };
  // const { orders } = useSelector((state) => state.allOrders);
  //   const [bestProduct, setBestProduct] = useState([]);

  //   orders?.map((order) => setBestProduct(order.orderItems[0]));
  //   console.log(bestProduct);

  // useEffect(() => {
  //   dispatch(getAllOrders());
  // }, [dispatch]);

  const options = {
    value: products.ratings,
    readOnly: true,
    precision: 0.5,
  };
  // {order._id && order.orderItems[0].product === products._id }

  return (
    <div className="productCard">
      <img src={newOrderItem[0].image} alt="" />
      <p>{newOrderItem[0].name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({products.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`$${newOrderItem[0].price}`}</span>
    </div>
  );
};

export default BestSell;

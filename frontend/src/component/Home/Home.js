import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import ScrapProductCard from "./ScrapProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import {
  scrapClearErrors,
  getScrapProduct,
} from "../../actions/scrapProductAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { getAllOrders } from "../../actions/orderAction";
import BestSell from "./BestSell";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const {
    loading: loadingScrap,
    error: scraperror,
    products: scrapProducts,
  } = useSelector((state) => state.scrapProducts);
  const { orders } = useSelector((state) => state.allOrders);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  useEffect(() => {
    if (scraperror) {
      alert.error(scraperror);
      dispatch(scrapClearErrors());
    }
    dispatch(getScrapProduct());
  }, [dispatch, scraperror, alert]);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <Fragment>
      {loading && loadingScrap ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Scrap into Creative" />

          <div className="banner">
            <p>Welcome to our scrap into creative ecommerce world</p>
            <h1>FIND YOUR PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Best Selling Products trend</h2>

          <div className="container" id="container">
            {orders &&
              orders.map((order) => <BestSell key={order._id} order={order} />)}
          </div>

          <h2 className="homeHeading">Scrap Featured Products</h2>

          <div className="container" id="container">
            {scrapProducts &&
              scrapProducts.map((product) => (
                <ScrapProductCard key={product._id} product={product} />
              ))}
          </div>
          <h2 className="homeHeading">Creative Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

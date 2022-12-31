import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import {
  scrapClearErrors,
  getScrapProduct,
} from "../../actions/scrapProductAction";
import Loader from "../layout/Loader/Loader";
import ScrapProductCard from "../Home/ScrapProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import { getAllOrders } from "../../actions/orderAction";
import BestSell from "../Home/BestSell";
import { Link } from "react-router-dom";

const categories = [
  "Glass & Ceramics",
  "Fabrics",
  "Metals",
  "Plastic",
  "Paper",
  "Rubber & Leather",
  "Electronics",
  "Woods and Furnitures",
  "Others",
];

const ScrapProducts = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const { orders } = useSelector((state) => state.allOrders);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.scrapProducts);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(scrapClearErrors());
    }
    dispatch(getAllOrders());
    dispatch(getScrapProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  const handleClick = (event, newValue) => {
    document.getElementById("bestSell").style.display = "block";
    document.getElementById("products").style.display = "none";
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="SCRAP PRODUCTS" />
          <div id="products">
            <h2 className="productsHeading">Products</h2>

            <div className="products">
              {products &&
                products.map((product) => (
                  <ScrapProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>

          <div style={{ display: "none" }} id="bestSell">
            <h2 className="homeHeading">Best Selling Products</h2>

            <div className="products">
              {orders &&
                orders.map((order) => (
                  <BestSell key={order._id} order={order} />
                ))}
            </div>
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>

            <Link className="bestSell" onClick={handleClick}>
              Best Selling
            </Link>
          </div>

          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ScrapProducts;

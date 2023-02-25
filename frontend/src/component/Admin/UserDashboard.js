import React, { useEffect } from "react";
import UserSidebar from "./UserSidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
// import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { useDispatch } from "react-redux";
import { getUserProduct } from "../../actions/productAction";
import { getUserScrapProduct } from "../../actions/scrapProductAction";
import MetaData from "../layout/MetaData";

const Dashboard = () => {
  const dispatch = useDispatch();

  //   const { products } = useSelector((state) => state.products);
  //   const { products: scrapProducts } = useSelector(
  //     (state) => state.scrapProducts
  //   );

  // let outOfStock = 0;

  //   products &&
  //     products.forEach((item) => {
  //       if (item.Stock === 0) {
  //         outOfStock += 1;
  //       }
  //     });

  //   scrapProducts &&
  //     scrapProducts.forEach((item) => {
  //       if (item.Stock === 0) {
  //         outOfStock += 1;
  //       }
  //     });

  useEffect(() => {
    dispatch(getUserProduct());
    dispatch(getUserScrapProduct());
  }, [dispatch]);

  let totalAmount = 0;
  //   orders &&
  //     orders.forEach((item) => {
  //       totalAmount += item.totalPrice;
  //     });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  //   const doughnutState = {
  //     labels: ["Out of Stock", "InStock"],
  //     datasets: [
  //       {
  //         backgroundColor: ["#00A6B4", "#6800B4"],
  //         hoverBackgroundColor: ["#4B5000", "#35014F"],
  //         data: [outOfStock, products.length - outOfStock],
  //       },
  //     ],
  //   };

  //   const doughnutScrapState = {
  //     labels: ["Out of Stock", "InStock"],
  //     datasets: [
  //       {
  //         backgroundColor: ["#00A6B4", "#6800B4"],
  //         hoverBackgroundColor: ["#4B5000", "#35014F"],
  //         data: [outOfStock, scrapProducts.length - outOfStock],
  //       },
  //     ],
  //   };

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <UserSidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        {/* <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ${totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/user/products">
              <p>Creative</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/user/scrap-products">
              <p>Scrap</p>
              <p>{scrapProducts && scrapProducts.length}</p>
            </Link>
          </div>
        </div> */}

        <div className="lineChart">
          <Line data={lineState} />
        </div>
        {/* <h2>Creative Products </h2>
        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
        <h2>Scrap Products</h2>
        <div className="doughnutChart">
          <Doughnut data={doughnutScrapState} />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;

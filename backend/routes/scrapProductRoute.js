const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controllers/scrapProductController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/scrap-products").get(getAllProducts);

router
  .route("/admin/scrap-products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router.route("/user/scrap-products").get(isAuthenticatedUser, getAdminProducts);

router
  .route("/admin/scrap-product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router
  .route("/user/scrap-product/new")
  .post(isAuthenticatedUser, createProduct);

router
  .route("/user/scrap-product/:id")
  .put(isAuthenticatedUser, updateProduct)
  .delete(isAuthenticatedUser, deleteProduct);

router
  .route("/admin/scrap-product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/scrap-product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;

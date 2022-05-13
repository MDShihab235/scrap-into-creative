import {
  ALL_SCRAP_PRODUCT_FAIL,
  ALL_SCRAP_PRODUCT_REQUEST,
  ALL_SCRAP_PRODUCT_SUCCESS,
  ADMIN_SCRAP_PRODUCT_REQUEST,
  ADMIN_SCRAP_PRODUCT_SUCCESS,
  ADMIN_SCRAP_PRODUCT_FAIL,
  NEW_SCRAP_PRODUCT_REQUEST,
  NEW_SCRAP_PRODUCT_SUCCESS,
  NEW_SCRAP_PRODUCT_FAIL,
  NEW_SCRAP_PRODUCT_RESET,
  UPDATE_SCRAP_PRODUCT_REQUEST,
  UPDATE_SCRAP_PRODUCT_SUCCESS,
  UPDATE_SCRAP_PRODUCT_FAIL,
  UPDATE_SCRAP_PRODUCT_RESET,
  DELETE_SCRAP_PRODUCT_REQUEST,
  DELETE_SCRAP_PRODUCT_SUCCESS,
  DELETE_SCRAP_PRODUCT_FAIL,
  DELETE_SCRAP_PRODUCT_RESET,
  PRODUCT_SCRAP_DETAILS_REQUEST,
  PRODUCT_SCRAP_DETAILS_FAIL,
  PRODUCT_SCRAP_DETAILS_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_RESET,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_RESET,
  CLEAR_ERRORS,
} from "../constants/scrapProductConstants";

export const productsScrapReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_SCRAP_PRODUCT_REQUEST:
    case ADMIN_SCRAP_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ALL_SCRAP_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProductsCount: action.payload.filteredProductsCount,
      };

    case ADMIN_SCRAP_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case ALL_SCRAP_PRODUCT_FAIL:
    case ADMIN_SCRAP_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newScrapProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case NEW_SCRAP_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_SCRAP_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        product: action.payload.product,
      };
    case NEW_SCRAP_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_SCRAP_PRODUCT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productScrapReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SCRAP_PRODUCT_REQUEST:
    case UPDATE_SCRAP_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SCRAP_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_SCRAP_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_SCRAP_PRODUCT_FAIL:
    case UPDATE_SCRAP_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_SCRAP_PRODUCT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_SCRAP_PRODUCT_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productScrapDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_SCRAP_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_SCRAP_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_SCRAP_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newScrapReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productScrapReviewsReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case ALL_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_REVIEW_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case ALL_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const reviewScrapReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_REVIEW_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

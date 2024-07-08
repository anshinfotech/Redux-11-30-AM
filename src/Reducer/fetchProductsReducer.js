import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "../Actions/fetchProductAction";

const initialProductState = {
  products: [],
  loading: "",
  error: "",
  message: "",
};

export const fetchReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        message: "Products Fecthed Successfully",
        loading: false,
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        message: "Something Went Wrong",
      };
    default:
        return{...state}
  }
};

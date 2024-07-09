import {
  FETCH_CART_FAIL,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "../Actions/fetchProductAction";

const initialProductState = {
  products: [],
  loading: "",
  error: "",
  message: "",
  cart:[]
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
    
      case FETCH_CART_REQUEST:
        return { ...state, loading: true };

      case FETCH_CART_SUCCESS:
        return {
          ...state,
          cart: [...state.cart,action.payload],
          message: "CART ITEMS Fecthed Successfully",
          loading: false,
        };

      case FETCH_CART_FAIL:
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


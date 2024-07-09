export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const jsondata = await (
      await fetch("https://dummyjson.com/products")
    ).json();
    const data = jsondata.products;
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAIL, payload: error });
  }
};

export const FETCH_CART_FAIL = "FETCH_CART_FAIL";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";

export const fetchCart = (item) => async(dispatch) => {
  dispatch({ type: FETCH_CART_REQUEST });
  try {
    // const cart = await fetch(`https://dummyjson.com/products/${id}`)
    // dispatch({ type: FETCH_CART_SUCCESS, payload: cart });
    dispatch({ type: FETCH_CART_SUCCESS, payload: item });
  } catch (error) {
    dispatch({ type: FETCH_CART_FAIL, payload: error });
  }
};

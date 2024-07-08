export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const jsondata = await (await fetch("https://dummyjson.com/products")).json()
    const data = jsondata.products
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAIL, payload: error });
  }
};

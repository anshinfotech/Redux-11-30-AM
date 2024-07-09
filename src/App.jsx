import React, { useEffect } from "react";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Products from "./Components/Products";
import Services from "./Components/Services";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Errorpage from "./Components/Errorpage";
import Home from "./Components/Home";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, fetchProducts } from "./Actions/fetchProductAction";

const App = () => {
  const products = useSelector((state) => state.prd.products);
  const error = useSelector((state) => state.prd.error);
  const isLoading = useSelector((state) => state.prd.loading);
  const message = useSelector((state) => state.prd.message);
  const cart = useSelector((state) => state.prd.cart);
  console.log("PRODUCTS", products);
  console.log("ERROR", error);
  console.log("LOADING", isLoading);
  console.log("MESSAGE", message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    // npm i react-router react-router-dom
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/products" element={<Products />}></Route>
    //     <Route path="/contact" element={<Contact />}></Route>
    //     <Route path="/services" element={<Services />}></Route>
    //     <Route path="/about" element={<About />}></Route>
    //     <Route path="*" element={<Errorpage/>}></Route>
    //   </Routes>
    // </BrowserRouter>

    <>
    <Link to="/cart">Go to Cart Page {cart.length}</Link>
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {products.length > 0 &&
        products.map((e) => {
          return (
            <div key={e.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={e.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.description}</p>
                  <a href="#" className="btn btn-primary">
                    {e.price}
                  </a>
                  <a
                    href="#"
                    className="btn btn-warning"
                    onClick={() =>{
                      console.log("ADDED TO CART");
                      dispatch(fetchCart(e))
                    }}
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    </>

    
  );
};

export default App;

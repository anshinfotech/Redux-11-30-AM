import React, { useEffect } from "react";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Products from "./Components/Products";
import Services from "./Components/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Errorpage from "./Components/Errorpage";
import Home from "./Components/Home";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./Actions/fetchProductAction";

const App = () => {
  const products = useSelector((state) => state.prd.products);
  const error = useSelector((state) => state.prd.error);
  const isLoading = useSelector((state) => state.prd.loading);
  const message = useSelector((state) => state.prd.message);
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
      {products.length > 0 &&
        products.map((e) => {
          return <h1>{e.title}</h1>;
        })}
    </>
  );
};

export default App;

import React, { useState } from "react";
import { useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { FidgetSpinner } from "react-loader-spinner";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState();

  useEffect(()=>{
    document.title="Product Page"
  },[])

  useEffect(() => {
    setLoading(true);
    const showPrd = async () => {
      try {
        const data = await (
          await fetch("https://dummyjson.com/products")
        ).json();

        console.log(data.products);
        setProducts(data.products);
        // setTimeout(() => {
        //   setLoading(false);
        // }, 3000);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    showPrd();
  }, []);

  // console.log("My products",products);

  return (
    <div>
      {/* <button onClick={showPrd}>Show products</button> */}

      {loading ? (
        <div>
          {/* <ClimbingBoxLoader
        color="#ff0000"
        size={20}
        speedMultiplier={2}
      /> */}

<FidgetSpinner
  visible={true}
  height="80"
  width="80"
  ariaLabel="fidget-spinner-loading"
  wrapperStyle={{}}
  wrapperClass="fidget-spinner-wrapper"
  />
        </div>
      ) : (
        products.map((prd) => {
          return (
            <div key={prd.id}>
              <h1>{prd.title}</h1>
              <img src={prd.thumbnail} alt="" />
              <button>Buy now at ${prd.price}</button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Products;

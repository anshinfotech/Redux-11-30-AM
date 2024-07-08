import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
    useEffect(()=>{
        document.title="Error Page"
    },[])
  return (
    <div>
      <h1>404 Error</h1>
      <p>Please Check your path</p>
      <Link to="/">
        <button>Click to go Back</button>
      </Link>
    </div>
  );
};

export default Errorpage;

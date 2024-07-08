import React, { useEffect } from "react";

const About = () => {
  useEffect(()=>{
    document.title="About Page"
  },[])
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
};

export default About;

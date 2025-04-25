import React from "react";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3313/api/products");
        const data = await response.json();
        console.log(data.products);
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);
  // style the products component
  const productsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor: "rgb(217, 205, 30)",
  
  
  }
  
  const productCards = {
    backgroundColor: "rgb(167, 238, 14)",
    fontSize: "20px",
    fontWeight: "bold",
    color: "rgb(38, 86, 12)",
    width: "30%",
    TextAlign: "center",
    width: "300px",
    borderRadius: "20px",
    padding: "20px",
  };


  return (
    <div style={productsContainer}>
      {products.map((item, index) => {
        return (
          <div key={index} style={productCards}>
            <h1>{item.Name}</h1>
            <p>{item.Description}</p>
            <h4>{item.Price}</h4>
          </div>
        );
      })}
    </div>
  );
}

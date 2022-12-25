import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState("12");

  const [error, setError] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await axios.get("/products");
      console.log(response);
      setProducts(response.data.products);
    } catch(error) {
      setError(error.message);
    }
  }


 
  return (
    <div>
      {error !== "" && error}
      <div>
        <Products products={products}/>
      </div>
    </div>
  );
}

export default App;

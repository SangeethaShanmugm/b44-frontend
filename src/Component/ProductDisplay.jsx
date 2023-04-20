import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { API } from "../global";
import axios from "axios";
import ProductCard from "./ProductCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function ProductDisplay() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  //axios call
  const getProducts = () => {
    axios.get(`${API}/product`).then((res) => {
      if (res.status === 401) {
        console.log("Data Not Found");
      }
      console.log(res.data);
      setProductData(res.data);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`${API}/product/` + id).then((res) => {
      if (res.status === 200) {
        getProducts();
      }
    });
  };



  const navigate = useNavigate();
  return (
    <Container>
      <h1>ProductDisplay </h1>
      <Button
        variant="contained"
        onClick={() => navigate("/products/addProduct")}
      >
        Create Product
      </Button>
      <Box xs="5">
        {productData.map((item) => {
          return (
            <ProductCard
              key={item.id}
              value={item}
              handleDelete={handleDelete}
             
            />
          );
        })}
      </Box>
    </Container>
  );
}

export default ProductDisplay;

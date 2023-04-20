import Container from "@mui/material/Container";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { API } from "../global";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let initialValue = {
  name: "",
  price: 0,
  description: "",
  unitsAvailable: 0,
  productImage: "",
};

function AddProduct() {
  const [formData, setFormData] = useState(initialValue);
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.type === "number") {
      setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    fetch(`${API}/product`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((data) => data.json())
      .then((res) => {
        setFormData(initialValue);
        console.log(res);
      })
      .then(() => navigate("/"));
  };

  return (
    <Container>
      <h1>AddProduct</h1>
      <Button onClick={() => navigate(-1)} style={{ marginRight: "auto" }}>
        BACK
      </Button>
      <br />
      <br />
      <br />
      <Form>
        <FormGroup row>
          <Label for="productName" sm={2}>
            Product Name
          </Label>
          <Col sm={10}>
            <Input
              id="productName"
              name="name"
              placeholder="Enter Product Name"
              type="text"
              onChange={handleChange}
              value={formData.name}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" sm={2}>
            Description
          </Label>
          <Col sm={10}>
            <Input
              id="description"
              name="description"
              placeholder="Enter Description"
              type="text"
              onChange={handleChange}
              value={formData.description}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="price" sm={2}>
            Price
          </Label>
          <Col sm={10}>
            <Input
              id="price"
              name="price"
              placeholder="Enter Price"
              type="number"
              onChange={handleChange}
              value={formData.price}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="unitsAvailable" sm={2}>
            Units Available
          </Label>
          <Col sm={10}>
            <Input
              id="unitsAvailable"
              name="unitsAvailable"
              placeholder="Enter UnitsAvailable"
              type="number"
              onChange={handleChange}
              value={formData.unitsAvailable}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="productImage" sm={2}>
            productImage
          </Label>
          <Col sm={10}>
            <Input
              id="productImage"
              name="productImage"
              placeholder="Enter productImage"
              type="text"
              onChange={handleChange}
              value={formData.productImage}
            />
          </Col>
        </FormGroup>
        <Button color="primary" onClick={handleSubmit}>
          Add Product
        </Button>
      </Form>
    </Container>
  );
}

export default AddProduct;

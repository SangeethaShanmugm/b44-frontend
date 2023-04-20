import React,{ useState,useEffect } from 'react'
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import Container from "@mui/material/Container";
import { useNavigate,useParams } from "react-router-dom";
import { API } from '../global';


function EditProduct() {
   
 const {id} = useParams()
 const [product, setProduct]= useState(null)
    const navigate = useNavigate();

    useEffect(()=>{
fetch(`${API}/product/${id}`,{
  method:"GET"
})
.then((data) => data.json())
.then((pd) => setProduct(pd))
    },[])   
     
if(product){
  return (

    <EditProductForm initialValue={product} />
   )
} else {
  return "...Loading"
}
  
}



function EditProductForm({initialValue}){
  
// var initialValue = {
//   name: "",
//   price: 0,
//   description: "",
//   unitsAvailable: 0,
//   productImage: "",
// };



 const [editFormData, setEditFormData] = useState(initialValue);
   const navigate = useNavigate();

     const handleChange = (e) => {
        if (e.target.type === "number") {
          setEditFormData({ ...editFormData, [e.target.name]: parseInt(e.target.value) });
        } else {
          setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
        }
      };

        const handleSubmit = () => {
        fetch(`${API}/product/${initialValue.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editFormData),
        })
          .then((data) => data.json())
          .then((res) => {
            setEditFormData(initialValue);
            console.log(res);
          })
          .then(() => navigate("/"));
      };

  return (
 <Container>
      <h1>EditProduct</h1>
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
              value={editFormData.name}
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
              value={editFormData.description}
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
              value={editFormData.price}
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
              value={editFormData.unitsAvailable}
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
              value={editFormData.productImage}
            />
          </Col>
        </FormGroup>
        <Button color="primary" onClick={handleSubmit}>
          SAVE
        </Button>
      </Form>
    </Container>
  )
}



export default EditProduct
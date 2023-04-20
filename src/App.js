import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDisplay from "./Component/ProductDisplay";
import AddProduct from "./Component/AddProduct";
import EditProduct from "./Component/EditProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductDisplay />} />
          <Route path="/products/addProduct" element={<AddProduct />} />
          <Route path="/products/editProduct/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

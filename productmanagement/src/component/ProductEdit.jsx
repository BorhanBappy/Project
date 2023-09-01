import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductEdit() {
  const { id } = useParams(); // Extract the product id from the URL
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    discountPrice: "",
    brand: "",
    category: "",
  });
  // console.log(product)
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        // console.log("Response:", response.data);
        setProduct(response.data);
        console.log("Set product is" + setProduct);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log("pre"+prevProduct)
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
    // console.log("ud"+setProduct())
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/products/${id}`, product)
      .then((response) => {
        console.log("Product updated:", response.data);
        navigate("/"); // Navigate back to the product list
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  console.log(Object.keys(product));

  return (
    <div className="container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(product).map((key) => (
          <div className=" form-group" key={key}>
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              id={key}
              className="form-control"
              name={key}
              value={product[key]}
              onChange={handleInputChange}
            />
          </div>
        ))}

    
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default ProductEdit;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { prdid } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${prdid}`)
      .then((response) => {
        setProductData([response.data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [prdid]);

  return (
    <div className="container">
      <h1 className="text-center">Product Details</h1>
      <div className="row justify-content-center text-center text-xl">
        {productData.map((product) => (
          <div className="col-md-6" key={product.id}>
            <div >
              <strong>Product Name</strong>
              <p>{product.productName}</p>
            </div>
            <div >
              <strong>Description</strong>
              <p>{product.description}</p>
            </div>
            <div >
              <strong>Price</strong>
              <p>${product.price}</p>
            </div>
            <div >
              <strong>Discount Price</strong>
              <p>${product.discountPrice}</p>
            </div>
            <div >
              <strong>Brand</strong>
              <p>{product.brand}</p>
            </div>
            <div>
              <strong>Category</strong>
              <p>{product.category}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/"} className="btn btn-danger m-3"> Back to All Product List</Link>
    </div>
  );
        }  
export default ProductDetails;

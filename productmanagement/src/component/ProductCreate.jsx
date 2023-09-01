import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const initialFields = {
  productName: "",
  description: "",
  price: "",
  discountPrice: "",
  brand: "",
  category: "",
};
const label = [
  "Product Name",
  "Description",
  "Price",
  "DiscountPrice",
  "Brand",
  "Category",
];

function ProductCreate() {
  const [productData, setProductData] = useState(initialFields);
  const navigate = useNavigate();

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    // Allow empty values for all fields
    if (value === "") {
      setProductData({ ...productData, [name]: value });
      return;
    }

    // Apply conditional validation based on field name
    if (
      (name === "productName" || name === "brand" || name === "category") &&
      !/^[A-Za-z]+$/.test(value)
    ) {
      // Reject input if it's not alphabetical for productName, brand, or category
      return;
    }  else if ((name === 'price' || name === 'discountPrice') && !/^\d+(\.\d+)?$/.test(value)) {
      // Reject input if it's not a number or decimal for price or discountPrice fields
      return;
    }

    setProductData({ ...productData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      axios.post("http://localhost:3000/products", productData);
      navigate("/");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">Product Create</h2>
          <form className=" p-4" onSubmit={handleFormSubmit}>
            {console.log(Object.keys(productData))}{" "}
            {Object.keys(productData).map((field, index) => (
              <div className="col-lg-12" key={field}>
                <div className="form-group">
                  <label className="">{label[index]}</label>
                  <input
                    type={field}
                    name={field}
                    required={field != "DiscountPrice"}
                    value={productData[field]}
                    onChange={handleFieldChange}
                    className="form-control"
                  />
                </div>
              </div>
            ))}
            <div className="">
              <button className="btn btn-success ml-6 mt-3" type="submit">
                Save
              </button>
              <Link to="/" className="btn btn-danger ml-4 mt-3">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductCreate;

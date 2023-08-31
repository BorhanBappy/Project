import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductCreate() {
  const [productName, setName] = useState("");
  const [description, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [brand, setBrand] = useState("");
  const[category,setCategory]=useState("")
  const [active, setActive] = useState(true);
  const [validation, nameChange] = useState(false);

  // setName=('')
  const navigation = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      productName,
      description,
      price,
      discountPrice,
      brand,
      category,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/products",
        productData
      );
      setName("");
      setDetails("");
      setPrice("");
      setDiscountPrice("");
      setBrand("");
      setCategory("")
      setActive(true);
      navigation("/");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleFormSubmit}>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Product Create</h2>
                {/* Other content for the card body */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Product Name</label>
                      <input
                        required
                        value={productName}
                        onMouseMoveCapture={(e) => nameChange(true)}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      />
                      {productName.length == 0 && validation && (
                        <span className="text-danger">
                          Enter The Product Name
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Product Details</label>
                      <input
                        value={description}
                        onChange={(e) => setDetails(e.target.value)}
                        className="form-control"
                      />
                      
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Price</label>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Discount Price</label>
                      <input
                        type="number"
                        value={discountPrice}
                        onChange={(e) => setDiscountPrice(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Brand</label>
                      <input
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Category</label>
                      <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={productName}
                        onChange={(e) => setActive(e.target.checked)}
                      />
                      <label className="form-check-label">Is active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success ml-6" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger ml-4">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* Other content after the row */}
        </div>
      </div>
    </div>
  );
}

export default ProductCreate;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";

const ProductListing = () => {
  // State variables
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const navigate = useNavigate();

  // Load products from API
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Handlers
  const handleRemoveProduct = (productId) => {
    axios
      .delete(`http://localhost:3000/products/${productId}`)
      .then((response) => {
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch((error) => {
        console.error("Error removing product:", error);
      });
  };

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOrder("asc");
      setSortField(field);
    }
  };

  // Sort products based on selected field and order
  const sortProducts = (data) => {
    if (sortField === "price" || sortField === "discountPrice") {
      const multiplier = sortOrder === "asc" ? 1 : -1;
      return [...data].sort(
        (a, b) => (a[sortField] - b[sortField]) * multiplier
      );
    }
    return data;
  };
  //  Navigated another component
  const LoadEdit = (id) => {
    navigate(`/product/edit/${id}`);
  };

  const LoadDetail = (id) => {
    navigate(`/product/details/productName/${id}`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2>Product List</h2>
            </div>
            <div className="card-body">
              {/* Filter and Sort Controls */}
              <div className="flex justify-between p-3 space-x-5">
                <Link to="product/create" className="btn btn-success">
                  Add New (+)
                </Link>
                <input
                  className="ml-4 text-center bg-neutral-200 w-52 border-lime-600"
                  type="text"
                  placeholder="Enter the product Name"
                  onChange={(e) => setValue(e.target.value)}
                />
                <div className="flex items-center space-x-3">
                  <label htmlFor="sortSelect">Sort by:</label>
                  <select
                    id="sortSelect"
                    className="border p-1"
                    value={sortField}
                    onChange={(e) => handleSort(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="price">Price (Low to High)</option>
                    <option value="discountPrice">
                      Discount Price (Low to High)
                    </option>
                    <option value="price">Price (High to Low)</option>
                    <option value="discountPrice">
                      Discount Price (High to Low)
                    </option>
                  </select>
                </div>
              </div>

              {/* Product Table */}
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ProductName</th>
                    <th>Description</th>
                    <th onClick={() => handleSort("price")}>Price</th>
                    <th onClick={() => handleSort("discountPrice")}>
                      DiscountPrice
                    </th>
                    <th>Brand</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {sortProducts(products)
                    .filter((product) => {
                      return (
                        value.trim() === "" ||
                        product.productName
                          .toLowerCase()
                          .includes(value.toLowerCase())
                      );
                    })
                    .map((product) => (
                      <tr key={product.id}>
                        <td>{product.productName}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.discountPrice}</td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                        <td className="flex justify-center items-center">
                          <a
                            className="btn btn-success mr-2"
                            onClick={() => {
                              LoadEdit(product.id);
                            }}
                          >
                            Edit
                          </a>
                          <a
                            className="btn btn-danger mr-2"
                            onClick={() => handleRemoveProduct(product.id)}
                          >
                            Remove
                          </a>
                          <a
                            className="btn btn-primary"
                            onClick={() => {
                              LoadDetail(product.id);
                            }}
                          >
                            Details
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

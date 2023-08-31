import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductListing = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const navigate=useNavigate()
 const LoadEdit =(id)=>{ 
     navigate("/product/edit/"+id)
 }
 const LoadDetail=(id)=>{ 
  navigate("/product/details/productName/"+id)
}
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
       // Store fetched products in state
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Empty dependency array to run effect after the initial render

  const handleRemoveProduct = (productId) => {
    // Send a DELETE request to the server to remove the product
    axios
      .delete(`http://localhost:3000/products/${productId}`)
      .then((response) => {
        console.log("Product removed:", response.data);
        // Update the products state to reflect the change
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch((error) => {
        console.error("Error removing product:", error);
      });
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
              <div>
                <Link to="product/create" className="btn btn-success">
                  Add New (+)
                </Link>
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ProductName</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>DiscountPrice</th>
                    <th>Brand</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
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


// useEffect(() => {
//   axios
//     .get("http://localhost:3000/products")
//     .then((response) => {
//       setProducts(response.data);
//       // Store fetched products in state
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }, []); // Empty dependency array to run effect after the initial render

// const handleRemoveProduct = (productId) => {
//   // Send a DELETE request to the server to remove the product
//   axios
//     .delete(`http://localhost:3000/products/${productId}`)
//     .then((response) => {
//       console.log("Product removed:", response.data);
//       // Update the products state to reflect the change
//       setProducts(products.filter((product) => product.id !== productId));
//     })
//     .catch((error) => {
//       console.error("Error removing product:", error);
//     });
// };


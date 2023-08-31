import React from 'react'

function ProductRemove() {
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
 
}

export default ProductRemove

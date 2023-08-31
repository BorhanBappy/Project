import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./ProductListing";
import ProductCreate from "./component/ProductCreate";
import ProductEdit from "./component/ProductEdit";
import ProductDetails from "./component/ProductDetails";
import ProductRemove from "./component/ProductRemove";
export default function App() {
  return (
    <div>
      <h1 className=" text-center">React Js Curd Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing/>}></Route>
          <Route path="/product/create" element={<ProductCreate/>}></Route>
          <Route path="/product/remove" element={<ProductRemove/>}></Route>

          <Route path="/product/edit/:id" element={<ProductEdit />} />
          <Route path="/product/details/productName/:prdid" element={<ProductDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

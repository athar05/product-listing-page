import React from "react";
import { productsData } from "../db/products";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import { useProduct } from "../context/ProductProvider";

const ProductListingPage = () => {
  const { productState } = useProduct();
  console.log(productState);
  return (
    <div className="product-listing-page">
      <Filters />
      <div>
        <ProductCard products={productState} />
      </div>
    </div>
  );
};

export default ProductListingPage;

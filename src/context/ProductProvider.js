import React, { useContext, useReducer } from "react";
import { productsData } from "../db/products";
import ProductContext from "./ProductContext";
import ProductReducer from "../reducers/ProductReducer";

const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(ProductReducer, {
    products: productsData,
    highToLow: false,
    lowToHigh: false,
    bySize: {
      s: false,
      m: false,
      l: false,
      xl: false,
    },
    byGender: {
      men: false,
      women: false,
    },
  });

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProduct };

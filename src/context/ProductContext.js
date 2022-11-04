import React, { createContext } from "react";
import { productsData } from "../db/products";

const ProductContext = createContext({
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

export default ProductContext;

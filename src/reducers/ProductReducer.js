import { productsData } from "../db/products";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "HIGH_TO_LOW":
      return {
        ...state,
        highToLow: !state.highToLow,
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        lowToHigh: !state.lowToHigh,
      };
    case "SMALL_SIZE":
      return {
        ...state,
        bySize: { ...state.bySize, s: !state.bySize.s },
      };
    case "MEDIUM_SIZE":
      return {
        ...state,
        bySize: { ...state.bySize, m: !state.bySize.m },
      };
    case "LARGE_SIZE":
      return {
        ...state,
        bySize: { ...state.bySize, l: !state.bySize.l },
      };
    case "EXTRA_LARGE_SIZE":
      return {
        ...state,
        bySize: { ...state.bySize, xl: !state.bySize.xl },
      };
    case "FOR_MEN":
      return {
        ...state,
        byGender: { ...state.byGender, men: !state.byGender.men },
      };
    case "FOR_WOMEN":
      return {
        ...state,
        byGender: { ...state.byGender, women: !state.byGender.women },
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        products: productsData,
        highToLow: false,
        lowToHigh: false,
        bySize: { ...state.bySize, s: false, m: false, l: false, xl: false },
        byGender: {
          ...state.byGender,
          men: false,
          women: false,
        },
      };
    default:
      return state;
  }
};

export default ProductReducer;

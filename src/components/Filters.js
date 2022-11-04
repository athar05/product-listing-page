import React, { useContext } from "react";
import { useProduct } from "../context/ProductProvider";

const Filters = () => {
  const { productState, productDispatch } = useProduct();
  console.log(productState);
  return (
    <div className="filters">
      <div className="filter-div">
        <h2>Price</h2>
        <label htmlFor="htl">
          <input
            type="checkbox"
            id="htl"
            onClick={() => productDispatch({ type: "HIGH_TO_LOW" })}
          />
          High To Low
        </label>
        <label htmlFor="lth">
          <input
            type="checkbox"
            id="lth"
            onClick={() => productDispatch({ type: "LOW_TO_HIGH" })}
          />
          Low To High
        </label>
      </div>
      <div className="filter-div">
        <h2>Size</h2>
        <label htmlFor="small-size">
          <input
            type="checkbox"
            id="small-size"
            onClick={() => productDispatch({ type: "SMALL_SIZE" })}
          />
          S
        </label>
        <label htmlFor="medium-size">
          <input
            type="checkbox"
            id="medium-size"
            onClick={() => productDispatch({ type: "MEDIUM_SIZE" })}
          />
          M
        </label>
        <label htmlFor="large-size">
          <input
            type="checkbox"
            id="large-size"
            onClick={() => productDispatch({ type: "LARGE_SIZE" })}
          />
          L
        </label>
        <label htmlFor="extra-large-size">
          <input
            type="checkbox"
            id="extra-large-size"
            onClick={() => productDispatch({ type: "EXTRA_LARGE_SIZE" })}
          />
          XL
        </label>
      </div>
      <div className="filter-div">
        <h2>Gender</h2>
        <label htmlFor="for-men">
          <input
            type="checkbox"
            id="for-men"
            onClick={() => productDispatch({ type: "FOR_MEN" })}
          />
          Men
        </label>
        <label htmlFor="for-women">
          <input
            type="checkbox"
            id="for-women"
            onClick={() => productDispatch({ type: "FOR_WOMEN" })}
          />
          Women
        </label>
      </div>
      <div className="filter-div">
        <button onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}>
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filters;

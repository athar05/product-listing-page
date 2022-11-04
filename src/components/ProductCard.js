import React from "react";

const ProductCard = ({ products }) => {
  console.log("productCard", products);
  return (
    <div className="product-card-container">
      {products.highToLow
        ? products.products
            .sort((a, b) => b.price - a.price)
            .map((prod) => (
              <div className="product-card">
                <img
                  src={prod.img}
                  className="product-image"
                  alt="product-images"
                />
                <h4>{prod.name}</h4>
                <div className="product-details">
                  <h6> ₹{prod.price}</h6>
                  <h6> Size: {prod.size}</h6>
                  <h6>For:{prod.idealFor}</h6>
                </div>
              </div>
            ))
        : products.lowToHigh
        ? products.products
            .sort((a, b) => a.price - b.price)
            .map((prod) => (
              <div className="product-card">
                <img
                  src={prod.img}
                  className="product-image"
                  alt="product-images"
                />
                <h4>{prod.name}</h4>
                <div className="product-details">
                  <h6> ₹{prod.price}</h6>
                  <h6> Size: {prod.size}</h6>
                  <h6>For:{prod.idealFor}</h6>
                </div>
              </div>
            ))
        : products.byGender.men
        ? products.products
            .filter((prod) => prod.idealFor === "men")
            .map((prod) => (
              <div className="product-card">
                <img
                  src={prod.img}
                  className="product-image"
                  alt="product-images"
                />
                <h4>{prod.name}</h4>
                <div className="product-details">
                  <h6> ₹{prod.price}</h6>
                  <h6> Size: {prod.size}</h6>
                  <h6>For:{prod.idealFor}</h6>
                </div>
              </div>
            ))
        : products.byGender.women
        ? products.products
            .filter((prod) => prod.idealFor === "women")
            .map((prod) => (
              <div className="product-card">
                <img
                  src={prod.img}
                  className="product-image"
                  alt="product-images"
                />
                <h4>{prod.name}</h4>
                <div className="product-details">
                  <h6> ₹{prod.price}</h6>
                  <h6> Size: {prod.size}</h6>
                  <h6>For:{prod.idealFor}</h6>
                </div>
              </div>
            ))
        : products.bySize.s
        ? products.products
            .filter((prod) => prod.size === "s")
            .map((prod) => (
              <div className="product-card">
                <img
                  src={prod.img}
                  className="product-image"
                  alt="product-images"
                />
                <h4>{prod.name}</h4>
                <div className="product-details">
                  <h6> ₹{prod.price}</h6>
                  <h6> Size: {prod.size}</h6>
                  <h6>For:{prod.idealFor}</h6>
                </div>
              </div>
            ))
        : products.bySize.m
        ? products.products
            .filter((prod) => prod.size === "m")
            .map((prod) => (
              <div className="product-card">
                <img
                  src={prod.img}
                  className="product-image"
                  alt="product-images"
                />
                <h4>{prod.name}</h4>
                <div className="product-details">
                  <h6> ₹{prod.price}</h6>
                  <h6> Size: {prod.size}</h6>
                  <h6>For:{prod.idealFor}</h6>
                </div>
              </div>
            ))
        : products.bySize.l
        ? products.products
            .filter((prod) => prod.size === "l")
            .map((prod) => (
              <div className="product-card">
                <img
                  src={prod.img}
                  className="product-image"
                  alt="product-images"
                />
                <h4>{prod.name}</h4>
                <div className="product-details">
                  <h6> ₹{prod.price}</h6>
                  <h6> Size: {prod.size}</h6>
                  <h6>For:{prod.idealFor}</h6>
                </div>
              </div>
            ))
        : products.bySize.xl
        ? products.products
            .filter((prod) => prod.size === "xl")
            .map((prod) => (
              <div className="product-card">
                <img
                  src={prod.img}
                  className="product-image"
                  alt="product-images"
                />
                <h4>{prod.name}</h4>
                <div className="product-details">
                  <h6> ₹{prod.price}</h6>
                  <h6> Size: {prod.size}</h6>
                  <h6>For:{prod.idealFor}</h6>
                </div>
              </div>
            ))
        : products.products &&
          products.products.map((prod) => (
            <div className="product-card">
              <img
                src={prod.img}
                className="product-image"
                alt="product-images"
              />
              <h4>{prod.name}</h4>
              <div className="product-details">
                <h6> ₹{prod.price}</h6>
                <h6> Size: {prod.size}</h6>
                <h6>For:{prod.idealFor}</h6>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ProductCard;

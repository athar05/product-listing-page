import { v4 as uuid } from "uuid";

export const productsData = [
  {
    id: uuid(),
    name: "Garo Trek 21 Low-Top Lace-Up Shoes",
    price: "4999",
    img: "/assets/images/garo-trek.webp",
    idealFor: "men",
    size: "l",
    rating: "4",
  },
  {
    id: uuid(),
    name: "Round-Toe Lace-Up Running Shoes",
    price: "6999",
    img: "/assets/images/round-toe.jpg",
    categoryName: "Bestseller",
    idealFor: "women",
    size: "l",
  },
  {
    id: uuid(),
    name: "Round-Toe Running Sports Shoes",
    price: "3650",
    img: "assets/images/Round-Toe-women.webp",
    idealFor: "men",
    size: "m",
  },
  {
    id: uuid(),
    name: "Air Max Bella TR 5 Sports Shoes",
    price: "4599",
    img: "assets/images/Air Max.webp",
    idealFor: "men",
    size: "m",
  },
  {
    id: uuid(),
    name: "Chuck Taylor All Star Lace-Up Shoes",
    price: "3599",
    img: "assets/images/Chuck Taylor.webp",
    idealFor: "women",
    size: "xl",
  },
  {
    id: uuid(),
    name: "Leather Lace-Up Casual Shoes",
    price: "1999",
    img: "assets/images/leather-lace-up.webp",
    idealFor: "women",
    size: "s",
  },
];

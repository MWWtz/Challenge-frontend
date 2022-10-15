/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Banana", votes: 10 },
  { id: 2, name: "Pineapple", votes: 8 },
  { id: 3, name: "Apple", votes: 6 },
  { id: 4, name: "Lime", votes: 4 },
  { id: 5, name: "Orange", votes: 3 },
];

function Product({ product, handleMinus, handlePlus }) {
  const { id, name, votes } = product;

  return (
    <li className="product">
      <span className="description">{name}</span>
      <span className="votes">
        votes: {votes}
        <button className="vote-btn" onClick={() => handlePlus(id)}>
          +
        </button>
        <button className="vote-btn" onClick={() => handleMinus(id)}>
          -
        </button>
      </span>
    </li>
  );
}

export function Grocery() {
  const [products, setProducts] = useState(PRODUCTS);
  function handlePlus(id) {
    // logic to vote a product
    const newList = products.map((prod) => {
      if (prod.id === id) {
        prod.votes += 1;
      }
      return prod;
    });
    setProducts(newList);
  }

  function handleMinus(id) {
    const newList = products.map((prod) => {
      if (prod.id === id && prod.votes !== 0) {
        prod.votes -= 1;
      }
      return prod;
    });
    setProducts(newList);
  }
  return (
    <ul className="grosery">
      {products.map((prod, i) => (
        <Product
          key={i}
          product={prod}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
        />
      ))}
    </ul>
  );
}

import React from "react";
import Product from "../Product";

export default function Products({ products }) {
  return (
    <>
      {products?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  );
}

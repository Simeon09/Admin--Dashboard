import React, { useEffect, useState } from "react";

import "./sass/product.css";
const Product = () => {
  const [products, setproducts] = useState([]);
  const url = process.env.REACT_APP_PRODUCT_URL;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setproducts(data.data));
  }, []);
  return (
    <>
      <div className=" product">
        {products
          ? products?.map((product, idx) => (
              <div className=" productsCards">
                <div className="productImage">
                  <img src={product.image} alt="icon" />
                </div>
                <div className="productDeescription">
                  <h4> {product.name}</h4>
                  <p> Net: ${product.net_price}</p>
                  <p> Taxe: {product.taxes}</p>
                  <p> Price: ${product.price}</p>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Product;

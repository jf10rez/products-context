import { useMemo } from "react";
import { getAllProducts } from "../selectors/getAllProducts";
import ProductItem from "./ProductItem";

const Products = () => {
  const allProducts = useMemo(() => getAllProducts(), []);

  return (
    <div>
      <h1>Lista de productos</h1>
      <hr />
      <div className="row">
        <ul className="list-group">
          {allProducts.map((product) => (
            <div className="col-md-12 col-xs-6" key={product.name}>
              <ProductItem {...product} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;

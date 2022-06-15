import React from "react";
import CarProductDelete from "./CarProductDelete";

const ShopItem = ({ name, price, count, image }) => {
  return (
    <div className="row">
        <div className="col-md-4">
            <img 
                src={image} 
                alt={name}
                style={{width: 100}}
            />
        </div>

        <div className="col-md-4">
            <label> Precio total: $ {(price * count)} </label>
        </div>

        <div className="col-md-4">
            <CarProductDelete 
                name={name}
            />
        </div>

        <hr />
    </div>
  );
};

export default ShopItem;

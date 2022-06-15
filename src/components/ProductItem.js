import React from "react";
import { useCounter } from "../hooks/useCounter";
import AddToCar from "./AddToCar";

const ProductItem = ({ name, price, image }) => {

    const { counter, handleAdd, handleSubstract, reset } = useCounter()

    return (
        
            <li className="list-group-item list-group-item-warning pt-3">
            <button 
                className="btn btn-danger"
                onClick={ handleSubstract }
            >
                -
            </button>
            <img src={image} alt={name} width="100px" className="p-3" />

            {`${name} - ${price} c/u  `}

            <button 
                className="btn btn-primary"
                onClick={ handleAdd }
            >
                +
            </button>

                <div className="row form-group mx-sm-3 mb-2">
                    <label >Cantidad seleccionada</label>
                    <input 
                        type="text" 
                        className="form-control w-25" 
                        disabled
                        value={counter}
                    />
                    <div className="col-3">
                        <button 
                            className="btn btn-outline-danger mt-3"
                            onClick={ reset }
                        >
                            Eliminar 
                        </button>
                    </div>
                    <div className="col-3">
                        <AddToCar 
                            name={ name } 
                            price={ price }
                            image={ image }
                            count={ counter }
                            />
                    </div>
                </div>
            </li>
    );
};

export default ProductItem;

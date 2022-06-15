import { useContext } from "react";
import { ProductSelect } from "../context/ProductSelect";


const AddToCar = ( {name, price, image, count} ) => {

    const { dispatch, state } = useContext(ProductSelect)

    const addShop = () =>{
        if(count === 0) return;

        const existProduct = state?.some( product => product.name === name )

        if( existProduct ){
            dispatch({
                type: 'Modify',
                payload: { name, count }
            })
        }else{
            dispatch({
                type: 'Add',
                payload: { name, price, image, count }
            })
        }
        
    }

    return (
        <button 
            className="btn btn-outline-success"
            onClick={ addShop }
        >
            Agregar al carrito
        </button>
    );
};

export default AddToCar;

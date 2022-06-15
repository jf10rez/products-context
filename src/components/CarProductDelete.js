import React, { useContext } from 'react'
import { ProductSelect } from '../context/ProductSelect'

const CarProductDelete = ({ name }) => {

    const { dispatch } = useContext(ProductSelect)

    const deleteProduct = () => {
        dispatch({
            type: 'Delete',
            payload: {name}
        })
    }

  return (
    <button 
        className="btn btn-danger mt-3 mb-3 ml-3 mr-3"
        onClick={ deleteProduct }
    >
        Eliminar
    </button>
  )
}

export default CarProductDelete
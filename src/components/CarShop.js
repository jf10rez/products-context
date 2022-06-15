import { useContext } from "react"
import { ProductSelect } from "../context/ProductSelect"
import ShopItem from "./ShopItem"

const CarShop = () => {

    const { state } = useContext(ProductSelect)

    return (
      <div className="container">

        {
          state.length > 0 
          ? <>
              <h2>Productos seleccionados:</h2>
              <hr />

              {
                state?.map( product => (
                  <ShopItem  
                    key={product.name}
                    {...product}
                  />
                ) )
              }
            </>
            : <p>No se han seleccionado productos...</p>
        }
      </div>
    )
}

export default CarShop
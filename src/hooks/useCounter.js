import { useState } from "react"

export const useCounter = ( initialValue = 0 ) => {



    const [counter, setCounter] = useState(initialValue)

    const handleAdd = () => setCounter( counter + 1 )

    const handleSubstract = () => {
        counter <= 0 
        ? setCounter( 0 )
        : setCounter( counter - 1 )
    }

    const reset = () => setCounter( initialValue )

    return {
        counter,
        handleAdd,
        handleSubstract,
        reset
    }

}


export const productsReducer = ( state = [], action ) => {
    const { payload, type } = action
    switch (type) {
        case 'Add':
            return [...state, payload]

        case 'Modify': 
               return state?.map( product => (
                    product.name === payload.name 
                    ? { ...product, count: payload.count }
                    : product
                 ) )

        case 'Delete':
            return state?.filter( product => product.name !== payload.name )
    
        default:
            return state
    }
}
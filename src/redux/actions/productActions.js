import { ActionTypes } from "../constants/action-types"


export const setProduts =  (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduts =  (product) => {
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
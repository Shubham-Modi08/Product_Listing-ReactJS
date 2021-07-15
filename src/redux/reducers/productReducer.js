import { ActionTypes } from "../constants/action-types";

const intialState = {
    products:[{
        id: 1,
        title: "Shubham",
        category:"Developer",
    }]
}
export const prouctReducer = (state,{type,payload}) =>{
         
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        
        default:
            return state;
    }
}
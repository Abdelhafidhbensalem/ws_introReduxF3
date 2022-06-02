import { ADD_INITIAL, DECREMENT, INCREMENT, RESET } from "../constants/actionTypes"


export const increment = (step,id) => {
    return { type: INCREMENT, payload: {step,id} }
}

export const decrement = (step) => {
    return { type: DECREMENT, payload: step }
}

export const reset = () => {
    return { type: RESET, payload: "" }
}

export const addInitial = (val) => {
    return { type:ADD_INITIAL, payload: val }
}



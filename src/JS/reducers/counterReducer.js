import { ADD_INITIAL, DECREMENT, INCREMENT, RESET } from "../constants/actionTypes";

const initialState = { counters: [{ counter: 0, id: 1 }, { counter: 0, id: 2 }, { counter: 0, id: 3 }] }

export const counterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INCREMENT:
            return { ...state, counters: state.counters.map(el => el.id == payload.id ? { ...el, counter: el.counter + payload.step } : el) }
        case DECREMENT:
            return { ...state, counter: state.counter - payload }
        case RESET:
            return { ...state, counter: 0 }
        case ADD_INITIAL:
            return { ...state, counter: payload }
        default:
            return state
    }
}
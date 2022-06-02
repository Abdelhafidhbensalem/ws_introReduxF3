import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInitial, decrement, increment, reset } from '../JS/Actions/actions'

const Counter = ({el}) => {
    const dispatch = useDispatch()
    const [step, setStep] = useState(1)
    const [initial, setInitial] = useState(0)
    return (
        <div><h1>Counter {el.id}</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input type="number" placeholder="add step" onChange={(e) => setStep(e.target.value)} />
                <button onClick={() => dispatch(increment(+step,el.id))}>+</button><p>{el.counter}</p>
                <button onClick={() => dispatch(decrement(step))}>-</button></div>
            <button onClick={() => { dispatch(reset()); setInitial(0) }}>reset</button>
            <input value={initial} type="number" placeholder="please add initial value" onChange={(e) => setInitial(Number(e.target.value))} />
            <button onClick={() => dispatch(addInitial(initial))}>add initial</button>
        </div >
    )
}

export default Counter
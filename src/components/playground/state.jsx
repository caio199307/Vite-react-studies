import { useState } from "react"

const StatePlayground = () => {
    let initialCount = 0

    let [count, setCount] = useState(initialCount);

    const addOne = () => {
        setCount(count+1)
    }

    const restOne = () => {
        setCount(prevCount => prevCount - 1)
    }

    const resetCount = () => {
        setCount(initialCount)
    }

    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={addOne}>Add one +1</button>
            <button onClick={restOne}>rest one -1</button>
            <button onClick={resetCount}>RESET</button>
        </>
    )
}

export default StatePlayground
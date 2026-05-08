import { useState } from 'react'

function CounterPage() {
    // Hooks:
    const [count, setCount] = useState(0)

    // Handlers:
    function incrementCounter() {
        // count++ // Error count = count + 1
        setCount(count + 1) // ?
    }

    return (
        <>
            <h1>Counter page</h1>
            {/* Render out the count value: */}
            <button onClick={incrementCounter}>Increase count</button>
            <p>Count: {count}</p>
        </>
    )
}

export default CounterPage
import { useContext, useState } from 'react'
import { CounterContext } from '../Context/CounterProvider'
import WithAuth from '../Auth/WithAuth'

function CounterPage() {
    // Hooks:
    // replace this with lifted state (useContext)
    // const [count, setCount] = useState(0)
    const [count, setCount] = useContext(CounterContext)

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
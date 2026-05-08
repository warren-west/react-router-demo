import { useState } from 'react'

function HomePage() {
    // Hooks:
    const [message, setMessage] = useState("Hello world") // initial value of the piece of state

    function handleButtonClick() {
        setMessage("The string value has changed")
    }


    return (
        <>
            <h1>Home page</h1>
            <button onClick={handleButtonClick}>Change Message</button>
            <p>{message}</p>
        </>
    )
}

export default HomePage
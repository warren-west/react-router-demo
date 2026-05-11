import { createContext, useState } from "react"

// 1. Create and export the context with createContext()
export const UserContext = createContext()

// 2. Create the "wrapper" provider component
function UserProvider(props) {
    // 5. Set up the useState hook (the lifted state)
    const [user, setUser] = useState("")

    // 3. Return the .Provider
    return (
        // Remember to nest the children in the Provider
        // 6. Copy the state into the "value" prop for the Provider
        <UserContext.Provider value={[user, setUser]}>
            { props.children }
        </UserContext.Provider>
    )
}

// 4. Export the Provider component
export default UserProvider
import { useContext } from "react"
import { Navigate } from "react-router"
import { UserContext } from "../Context/UserProvider"

const WithAuth = Component => props => {
    // 7. (continued from ../Context/UserProvider.jsx)
    // Use the useContext() hook, with the imported UserContext context.
    const [user, ] = useContext(UserContext)

    // check if user is logged in
    if (!user) {
        return <Navigate to="/" />
    } else {
        return <Component {...props} />
    }
}

export default WithAuth
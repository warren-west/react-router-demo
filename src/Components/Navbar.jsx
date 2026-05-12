import { NavLink } from 'react-router'
import "./Navbar.css"
import { useContext } from 'react'
import { CounterContext } from '../Context/CounterProvider'
import { UserContext } from '../Context/UserProvider'

function Navbar() {
    const [count, ] = useContext(CounterContext)
    const [user, setUser] = useContext(UserContext)

    function handleLogin() {
        setUser("Warren")
    }

    return(
        <nav>
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/instructions"><li>Instructions</li></NavLink>
                <NavLink to="/counter"><li>Counter ({count})</li></NavLink>
                <NavLink to="/profile"><li>{user}</li></NavLink>
                <button onClick={handleLogin}>Login</button>
            </ul>
        </nav>
    )
}

export default Navbar
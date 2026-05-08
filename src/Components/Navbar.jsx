import "./Navbar.css"

function Navbar() {

    return(
        <nav>
            <ul>
                <a href="/"><li>Home</li></a>
                <a href="/instructions"><li>Instructions</li></a>
                <a href="/counter"><li>Counter</li></a>                
            </ul>
        </nav>
    )
}

export default Navbar
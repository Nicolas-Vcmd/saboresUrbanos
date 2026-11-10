import { Link } from "react-router";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src="src\img\logo.svg" alt="Logo" />
            <Link to="/"><h1>Sabores Urbanos</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/mesas">Mesas</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
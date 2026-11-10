import { Link } from "react-router";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Sabores Urbanos</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/consulta">Ver mesas</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
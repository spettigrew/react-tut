import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Sara's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* Inline styling dynamic JS object {{}} */}
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    boarderRadius: "8px",
                }}>New Blog</Link>

            </div>
        </nav>
    );
}
 
export default Navbar;
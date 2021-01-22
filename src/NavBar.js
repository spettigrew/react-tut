const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Sara's Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                {/* Inline styling dynamic JS object {{}} */}
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    boarderRadius: "8px",
                }}>New Blog</a>

            </div>
        </nav>
    );
}
 
export default Navbar;
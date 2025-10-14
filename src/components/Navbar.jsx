import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const menuItem = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Project", path: "/project" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl text-green-400 font-bold tracking-wide">
                MyPortfolio
                </Link>

                <ul className="flex space-x-6">
                    {menuItem.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`${location.pathname === item.path
                                    ? "text-yellow-300 border-b-2 border-yellow-300"
                                    : "hover:text-yellow-200"
                                } transition-all duration-200`}
                            >
                            {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
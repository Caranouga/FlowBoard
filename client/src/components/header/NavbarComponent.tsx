import { NavLink } from "react-router-dom";
import NavbarLinkComponent from "./NavbarLinkComponent";

const NavbarComponent = () => {
    const navLinks = [
        { to: "/", text: "Home" }
    ];

    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">FlowBoard</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        {navLinks.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <NavbarLinkComponent to={link.to} text={link.text} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
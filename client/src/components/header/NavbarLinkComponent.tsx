import { NavLink, To, useLocation } from "react-router-dom";

const NavbarLinkComponent = ({to , text }: {to: To, text: string}) => {
    const location = useLocation();
    const isCurrentPath = location.pathname === to.toString();

    return (
        <NavLink className={`nav-link${isCurrentPath ? " active": ""}`} to={to}>{text} {(isCurrentPath ? (<span className="visually-hidden">(current)</span>) : null)}</NavLink>
    );
};

export default NavbarLinkComponent;
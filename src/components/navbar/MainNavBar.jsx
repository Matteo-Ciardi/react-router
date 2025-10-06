import { NavLink } from"react-router-dom";

const links = [
    {path: "/", label: "Home"},
    {path: "/chi-siamo", label: "Chi Siamo"},
    {path: "/prodotti", label: "Prodotti"}
]

const MainNavBar = () => {
    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MainNavBar
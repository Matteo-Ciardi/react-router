import { NavLink } from"react-router-dom";

import './MainNavBar.css'

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
                    <li key={link.path}>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MainNavBar
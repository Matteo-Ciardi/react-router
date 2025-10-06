import { Outlet, Link } from "react-router-dom";
import MainNavBar from "../components/navbar/MainNavBar";


export default function DefaultLayout() {
    return (
        <>
            <header>
                <div className="header-container">
                    <Link to="/"><img src='src/assets/img/logo.png' alt='logo' /></Link>
                    <MainNavBar />
                </div>
            </header>

            <main className="main-container">
                <Outlet />
            </main>

            <footer className="footer-container">

            </footer>
        </>
    )
}
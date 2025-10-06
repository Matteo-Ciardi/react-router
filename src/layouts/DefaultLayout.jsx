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

            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </>
    )
}
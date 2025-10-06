import { Outlet, Link } from "react-router-dom";


export default function DefaultLayout() {
    return (
        <>
            <header>
                <div className="header-container">
                    <Link to="/"><img src='src/assets/img/logo.png' alt='logo' /></Link>

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
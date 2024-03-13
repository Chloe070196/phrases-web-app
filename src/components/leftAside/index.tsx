import { Link } from "react-router-dom"
import "./style.css"
import { LogOutButton } from "../logoutButton"
import { useAuth } from "../../hooks/useAuth"

function LeftAside() {
    const { checkLogIn } = useAuth()
    const isLoggedIn = checkLogIn()

    if (! isLoggedIn) {
        return (<></>)
    }
    return (
        <>
            <aside className="left-aside">
                <nav>
                    <Link className="page-link" to="/"><h3>Home</h3></Link>
                    <Link className="page-link" to="/learn"><h3>Learn</h3></Link>
                    <Link className="page-link" to="/revise"><h3>Revise</h3></Link>
                    <Link className="page-link" to="/practice"><h3>Practice</h3></Link>
                    <Link className="page-link" to="/settings"><h3>Settings</h3></Link>
                </nav>
                <section className="left-aside-bottom-half">
                    <LogOutButton />
                </section>
            </aside>
        </>
    )
}
export { LeftAside }
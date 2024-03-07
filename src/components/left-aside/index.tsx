import { Link } from "react-router-dom"
import "./style.css"
import { LogOutButton } from "../logout-button"

function LeftAside() {
    return(
        <>
        <aside>
            <nav className="grid-rows-four">
                <Link className="page-link" to="/"><h3>Home</h3></Link>
                <Link className="page-link" to="/learn"><h3>Learn</h3></Link>
                <Link className="page-link" to="/practice"><h3>Revise</h3></Link>
                <Link className="page-link" to="/revise"><h3>Practice</h3></Link>
                <Link className="page-link" to="/settings"><h3>Settings</h3></Link>
            </nav>
            <LogOutButton />
        </aside>
        </>
    )
}
export { LeftAside }
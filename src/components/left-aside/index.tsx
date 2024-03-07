import { Link } from "react-router-dom"
import "./style.css"

function LeftAside() {
    return(
        <>
        <aside>
            <nav className="grid-rows-four">
                <Link className="page-link" to=""><h3>Learn</h3></Link>
                <Link className="page-link" to=""><h3>Revise</h3></Link>
                <Link className="page-link" to=""><h3>Practice</h3></Link>
                <Link className="page-link" to=""><h3>Settings</h3></Link>
            </nav>
        </aside>
        </>
    )
}
export { LeftAside }
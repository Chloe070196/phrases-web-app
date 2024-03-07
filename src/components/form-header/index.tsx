import { Link } from "react-router-dom"

function FormHeader( {formType, linkText, pathTo, message}: { formType: string, linkText: string, pathTo: string, message: string } ) {
    return (
        <header>
            <h2 className="form-header-item">Welcome!</h2>
            <p className="form-header-item">{ message }</p>
            <h3>{ formType }</h3>
            <Link to={pathTo}><strong className="link-to-form">{ linkText }</strong></Link>
        </header>
    )
}

export { FormHeader }
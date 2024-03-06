function FormHeader( {formType, pageLinkText, message}: { formType: string, pageLinkText: string, message: string } ) {
    return (
        <header className="form=header">
            <h2 className="form-header-item">Welcome!</h2>
            <strong className="form-header-item">{ pageLinkText }</strong>
            <p className="form-header-item">{ message }</p>
            <h3>{ formType }</h3>
        </header>
    )
}

export { FormHeader }
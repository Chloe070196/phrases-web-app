function RegistrationForm() {
    return (
        <form className="grid-rows-four">
            <label>email
                <input type="text" />
            </label>
            <label>username
                <input type="text" />
            </label>
            <label>password
                <input type="text" />
            </label>
            <label>confirm password
                <input type="text" />
            </label>
            <button type="submit" className="submit-button">submit</button>
        </form>
    )
}

export { RegistrationForm }
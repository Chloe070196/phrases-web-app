function RegistrationForm() {
    return (
        <form className="grid-rows-four">
            <label>
                <input type="text" placeholder="your email address"/>
            </label>
            <label>
                <input type="text" placeholder="a new username"/>
            </label>
            <label>
                <input type="text" placeholder="a new password"/>
            </label>
            <label>
                <input type="text" placeholder="confirm your new password"/>
            </label>
            <button type="submit" className="submit-button">submit</button>
        </form>
    )
}

export { RegistrationForm }
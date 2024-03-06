function LogInForm() {
    return (
        <form className="grid-rows-two">
            <label>
                <input type="text" placeholder="email@example.com"/>
            </label>
            <label>
                <input type="text" placeholder="your password"/>
            </label>
            <button type="submit" className="submit-button">submit</button>
        </form>
    )
}

export { LogInForm }
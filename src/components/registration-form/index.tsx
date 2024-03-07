import { ChangeEvent, FormEvent, useState } from "react"
import { registerNewUser } from "../../service/apiClient"
const INITIAL_FORM = {
    username: "",
    email: "",
    password: "",
    repeatedPassword: "",
}

function RegistrationForm() {
    const [form, setForm]= useState<{username: string, email: string, password: string, repeatedPassword: string} >(INITIAL_FORM)
    const updateForm = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e?.target?.name]: e?.target?.value })
    }
    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (form.password !== form.repeatedPassword) {
            return 
        }
        const newUser = {
            username: form.username,
            password: form.password,
            email: form.email
        }
        const response = await registerNewUser(newUser)
        console.log(response)
        return response
    }

    return (
        <form className="grid-rows-four" onSubmit={handleRegister}>
            <label>
                <input onChange={updateForm} type="text" value={form.email} name="email" placeholder="your email address"/>
            </label>
            <label>
                <input onChange={updateForm} type="text" value={form.username} name="username" placeholder="a new username"/>
            </label>
            <label>
                <input onChange={updateForm} type="password" value={form.password} name="password" placeholder="a new password"/>
            </label>
            <label>
                <input onChange={updateForm} type="password" value={form.repeatedPassword} name="repeatedPassword" placeholder="confirm your new password"/>
            </label>
            <button type="submit" className="submit-button">submit</button>
        </form>
    )
}

export { RegistrationForm }
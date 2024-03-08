import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import { logIn } from "../../service/apiClient"
import { useNavigate } from "react-router-dom"
import { AuthContext} from "../../context/auth"
const INITIAL_FORM = {
    email: "",
    password: "",
}

function LogInForm() {
    const [form, setForm] = useState<{ email: string, password: string }>(INITIAL_FORM)
    const navigate = useNavigate()
    const { user, setUser } = useContext(AuthContext)

    const updateForm = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e?.target?.name]: e?.target?.value })
    }

    const handleLogIn = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const providedCredentials = {
            password: form.password,
            email: form.email
        }
        const response = await logIn(providedCredentials)
        if (!response) {
            alert('incorrect username/password')
            return
        }
        setUser({ username: response?.username, token: response?.token })
        navigate("/")
        return response
    }

    useEffect(() => {
        console.log('set', user);
    }, [user]);

    return (
        <form className="grid-rows-four" onSubmit={handleLogIn}>
            <label>
                <input onChange={updateForm} type="text" value={form.email} name="email" placeholder="your email address" />
            </label>
            <label>
                <input onChange={updateForm} type="password" value={form.password} name="password" placeholder="your password" />
            </label>
            <button type="submit" className="submit-button">submit</button>
        </form>
    )
}

export { LogInForm }

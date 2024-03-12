import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useEffect } from "react"

function Settings() {
    const { checkLogIn } = useAuth()
    const navigate = useNavigate()

    const redirectToLogin = () => {
        const isLoggedIn = checkLogIn()
        if (!isLoggedIn) {
            navigate("/login")
        }
    }
    useEffect(redirectToLogin)
    return (
        <>
            <main></main>
        </>
    )
}

export { Settings }
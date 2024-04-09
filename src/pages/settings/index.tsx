import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useEffect } from "react"

function Settings() {
    const { checkLogIn, onPageReload } = useAuth()
    const navigate = useNavigate()

    const redirectToLogin = () => {
        const isLoggedIn = checkLogIn()
        if (!isLoggedIn) {
            navigate("/login")
        }
    }
    
    const handlePageReload = () => {
        onPageReload()
    }
    useEffect(handlePageReload, [])
    useEffect(redirectToLogin)
    return (
        <>
            <main></main>
        </>
    )
}

export { Settings }
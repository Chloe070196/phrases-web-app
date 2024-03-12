import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useEffect } from "react"

function PracticePage() {
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
            <main>
                <h2>Sandbox</h2>
                <section className="centered-section-position">
                    <h3>Practice using the phrases you've learnt!</h3>
                    <textarea  className="medium-section-dimensions section-colors"/>
                    <button className="bottom-right-button">Save</button>
                </section>
            </main>
        </>
    )
}

export { PracticePage }
import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/auth"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { MyPhrases } from "../../components/myPhrases"

const daysNum = 3
const phrasesNum = 34

function HomePage() {
    const context = useContext(AuthContext)
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
                <h1>Welcome, {context.user?.username}!</h1>
                <h3>Last practice sessions: <strong>{daysNum}</strong> days ago</h3>
                <h3>Phrases learnt: <strong>{phrasesNum}</strong></h3>
                <MyPhrases />
            </main>
        </>
    )
}
export { HomePage }
import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/auth"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { PhraseCard } from "../../components/phraseCard"

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

    const mockDayPhrase = {
        content: "hit the nail on the head",
        category: "",
        example: "He hit the nail on the head when he said this company needs more HR support.",
        meaning: "to describe exactly what is causing a situation or problem"
    }

    return (
        <>
            <main className="centered-content">
                <section className="small-section-dimensions top-left">
                    <h1>Welcome, {context.user?.username}!</h1>
                    <h3>Last practice sessions: <strong>{daysNum}</strong> days ago</h3>
                    <h3>Phrases learnt: <strong>{phrasesNum}</strong></h3>
                </section>
                <section className="daily-phrase-section">
                    <h3>Phrase of the day:</h3>
                    <PhraseCard phrase={mockDayPhrase} />
                </section>
            </main>
        </>
    )
}
export { HomePage }
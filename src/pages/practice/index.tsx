import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useEffect } from "react"
import { UserphraseSection } from "../../components/myPhrases"

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
            <main className="grid-cols-two">
                    <UserphraseSection />
                <section>
                    <h2>Sandbox</h2>
                    <h3>Practice using the phrases you've learnt!</h3>
                    <h3>Scroll through the list, and jot down the anecdotes or ideas that come to mind</h3>
                    <textarea className="section-colors" id="practice-area" placeholder="EXAMPLE: I had to grab the bull by the horns the other day when..."/>
                    <button className="bottom-right-button">Save</button>
                </section>
            </main>
        </>
    )
}

export { PracticePage }
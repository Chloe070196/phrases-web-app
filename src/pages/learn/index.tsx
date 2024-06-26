import { useNavigate } from "react-router-dom"
import { Stepper } from "../../components/stepper"
import { NewPhrasesProvider } from "../../context/newPhrases"
import { useAuth } from "../../hooks/useAuth"
import { useEffect } from "react"

function LearnPage() {
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
            <main>
                <NewPhrasesProvider>
                    <Stepper />
                </NewPhrasesProvider>
            </main>
        </>
    )
}

export { LearnPage }
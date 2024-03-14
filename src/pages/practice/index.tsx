import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useEffect, useState } from "react"
import { UserphraseSection } from "../../components/myPhrases"
import { SandboxSection } from "../../components/sandboxSection"
import { UserPhraseType } from "../../types"
import './style.css'

function PracticePage() {
    const [userphraseList, setUserphraseList] = useState<Array<UserPhraseType> | null>(null)
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
            <main className="practice-page">
                <UserphraseSection userphraseList={userphraseList} setUserphraseList={setUserphraseList}/>
                <SandboxSection userphraseList={userphraseList}/>
            </main>
        </>
    )
}

export { PracticePage }
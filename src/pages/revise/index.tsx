import { useNavigate } from "react-router-dom"
import { UserphraseList } from "../../components/userphraseList"
import { AuthContext } from "../../context/auth"
import { useAuth } from "../../hooks/useAuth"
import { getUserPhrases } from "../../service/apiClient"
import { UserPhraseType } from "../../types"
import { useCallback, useContext, useEffect, useState } from "react"
import { CategoryList } from "../../components/categoryList"

function RevisePage() {
    const [userphraseList, setUserphraseList] = useState<Array<UserPhraseType> | null>(null)
    const { user } = useContext(AuthContext)
    const { checkLogIn } = useAuth()
    const navigate = useNavigate()

    const redirectToLogin = () => {
        const isLoggedIn = checkLogIn()
        if (!isLoggedIn) {
            navigate("/login")
        }
    }

    const fetchUserPhrases = useCallback(async () => {
        if (user?.id) {
            const phrases = await getUserPhrases(Number(user.id))
            setUserphraseList(phrases)
        }
    }, [user])

    useEffect(redirectToLogin)
    useEffect(() => { fetchUserPhrases() }, [fetchUserPhrases])

    if (userphraseList) {
        return (
            <>
                <main className="grid-cols-two revise-page" >
                    <section>
                        <h2>My phrases: </h2>
                        <UserphraseList userphraseList={userphraseList} />
                    </section>
                    <CategoryList />
                </main>
            </>
        )
    }
    return (<></>)
}

export { RevisePage }


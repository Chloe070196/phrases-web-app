import { useNavigate } from "react-router-dom"
import { UserphraseList } from "../../components/userphraseList"
import { AuthContext } from "../../context/auth"
import { useAuth } from "../../hooks/useAuth"
import { getUserPhrases, getUserPhrasesByCategory } from "../../service/apiClient"
import { UserPhraseType } from "../../types"
import { useCallback, useContext, useEffect, useState } from "react"
import { CategoryList } from "../../components/categoryList"

function RevisePage() {
    const [userphraseList, setUserphraseList] = useState<Array<UserPhraseType> | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<string>("all")
    const { user } = useContext(AuthContext)
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

    const fetchUserPhrases = useCallback(async () => {
        if (!user?.id) {
            return
        }
        if (selectedCategory === "all") {
            const phrases = await getUserPhrases(Number(user.id))
            setUserphraseList(phrases)
            return
        }
        const phrases = await getUserPhrasesByCategory(Number(user.id), selectedCategory)
        setUserphraseList(phrases)
        return
    }, [user, selectedCategory])

    useEffect(redirectToLogin)
    useEffect(() => { fetchUserPhrases() }, [fetchUserPhrases])

    if (userphraseList) {
        return (
            <>
                <main className="grid-cols-two revise-page" >
                    <section>
                        <section>
                        <h2>My phrases: </h2>
                            <UserphraseList userphraseList={userphraseList} />
                        </section>
                        <CategoryList setSelectedCategory={setSelectedCategory} />
                    </section>
                    <section>
                        <h2>My texts: </h2>
                        <p>coming soon!</p>
                    </section>
                </main>
            </>
        )
    }
    return (<></>)
}

export { RevisePage }


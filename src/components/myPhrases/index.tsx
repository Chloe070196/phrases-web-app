import { useNavigate } from "react-router-dom"
import { UserphraseList } from "../../components/userphraseList"
import { AuthContext } from "../../context/auth"
import { useAuth } from "../../hooks/useAuth"
import { getUserPhrases, getUserPhrasesByCategory } from "../../service/apiClient"
import { UserPhraseType } from "../../types"
import { useCallback, useContext, useEffect, useState } from "react"
import { CategoryList } from "../../components/categoryList"

function UserphraseSection() {
    const [userphraseList, setUserphraseList] = useState<Array<UserPhraseType> | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<string>("all")
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
                <section >
                    <CategoryList setSelectedCategory={setSelectedCategory} />
                    <section>
                        <h2>My phrases: </h2>
                        <UserphraseList userphraseList={userphraseList} />
                    </section>
                </section>
            </>
        )
    }
    return (<></>)
}

export { UserphraseSection }


import { UserphraseList } from "../../components/userphraseList"
import { AuthContext } from "../../context/auth"
import { getUserPhrases } from "../../service/apiClient"
import { UserPhraseType } from "../../types"
import { useCallback, useContext, useEffect, useState } from "react"

function RevisePage() {
    const [userphraseList, setUserphraseList] = useState<Array<UserPhraseType> | null>(null)
    const { user } = useContext(AuthContext)

    const fetchUserPhrases = useCallback(async () => {
        if (user?.id) {
            const phrases = await getUserPhrases(Number(user.id))
            setUserphraseList(phrases)
        }
    }, [user])

    useEffect(() => { fetchUserPhrases() }, [fetchUserPhrases])

    if (userphraseList) {
        return (
            <>
                <main>
                    <h2>My phrases: </h2>
                    <UserphraseList userphraseList={userphraseList} />
                </main>
            </>
        )
    }
    return (<></>)
}

export { RevisePage }


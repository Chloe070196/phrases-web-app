import { UserphraseList } from "../../components/userphraseList"
import { getUserPhrases } from "../../service/apiClient"
import { UserPhraseType } from "../../types"
import { useCallback, useEffect, useState } from "react"

function RevisePage() {
    const [userphraseList, setUserphraseList] = useState<Array<UserPhraseType> | null>(null)

    const fetchUserPhrases = useCallback(async () => {
        const phrases = await getUserPhrases()
        setUserphraseList(phrases)
    }, [])

    useEffect(() => { fetchUserPhrases() }, [fetchUserPhrases])

    if (userphraseList) {
        return (
            <>
                <main>
                    <h2>My phrases: </h2>
                    <UserphraseList userphraseList={userphraseList}/>
                </main>
            </>
        )
    }
    return (<></>)
}

export { RevisePage }


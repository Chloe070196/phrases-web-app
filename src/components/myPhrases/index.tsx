import { PhraseType } from "../../types"
import { getPhrases } from "../../service/apiClient"
import { useCallback, useEffect, useState } from "react"
import { PhraseList } from "../phraseList"

function MyPhrases() {
    const [phraseList, setPhraseList] = useState<Array<PhraseType> | null>(null)

    const renderPhrases = useCallback(async () => {
        const phrases = await getPhrases()
        setPhraseList(phrases)
    }, [])

    useEffect(() => { renderPhrases() }, [renderPhrases])

    if (phraseList) {
        return (
            <>
                <PhraseList phraseList={phraseList} />
            </>
        )
    }
    return (<></>)

}

export { MyPhrases }
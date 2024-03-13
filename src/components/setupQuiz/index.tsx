import { ChangeEvent, FormEvent, useState } from "react"
import { getPhrases } from "../../service/apiClient"
import { PhraseType } from "../../types"
import { useNewPhrases } from "../../hooks/useNewPhrases"

function SetUpQuiz({ handleStepCompletion, setNewPhrases, setCanProceed }: { handleStepCompletion: () => void, setNewPhrases: React.Dispatch<React.SetStateAction<Array<PhraseType> | null>>, setCanProceed: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [phrasesNum, setPhrasesNum] = useState<number | null>(null)
    const { onStart } = useNewPhrases()

    const handleStart = async (e: FormEvent<HTMLFormElement>) => {
        e?.preventDefault()
        const phraseList = await getPhrases(phrasesNum)
        setNewPhrases(phraseList)
        onStart(phraseList)
        setCanProceed(true)
        handleStepCompletion()
    }
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPhrasesNum(Number(e?.target?.value))
    }

    return (<>
        <section className="centered-section-position section-colors small-section-dimensions background-classroom">
            <h2>Learn new phrases</h2>
            <form onSubmit={handleStart}>
                <label>Number of new phrases : {' '}
                    <select name="phrase_num" onChange={handleChange}>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="12">12</option>
                    </select>
                </label>
                <button type="submit" className="bottom-right-button">Start</button>
            </form>
        </section>
    </>)

}

export { SetUpQuiz }
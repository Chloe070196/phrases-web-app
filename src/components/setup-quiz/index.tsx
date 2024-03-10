import { ChangeEvent, FormEvent, useState } from "react"
import { getPhrases } from "../../service/apiClient"
import { PhraseType } from "../../types"



function SetUpQuiz({ handleStepCompletion, setNewPhrases }: { handleStepCompletion: () => void, setNewPhrases: React.Dispatch<React.SetStateAction<Array<PhraseType> | null>> }) {
    const [phrasesNum, setPhrasesNum] = useState<number | null>(null)

    const handleStart = async (e: FormEvent<HTMLFormElement>) => {
        e?.preventDefault()
        const phraseList = await getPhrases(phrasesNum)
        setNewPhrases(phraseList)
        handleStepCompletion()
    }
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPhrasesNum(Number(e?.target?.value))
    }

    return (<>
        <section className="quiz-setup-section">
            <h2>Learn new phrases</h2>
            <form onSubmit={handleStart}>
                <select name="phrase_num" onChange={handleChange}>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                </select>
                <button type="submit">Start</button>
            </form>
        </section>
    </>)

}

export { SetUpQuiz }
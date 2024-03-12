import { PhraseType } from "../../types"
import { ChangeEvent, ReactElement, useContext, useState } from "react"
import { GappedParagraph } from "../gappedParagraph"
import "./style.css"
import { NewPhrasesContext } from "../../context/newPhrases"
import { useNewPhrases } from "../../hooks/useNewPhrases"
import { postUserPhrase } from "../../service/apiClient"
import { AuthContext } from "../../context/auth"

function QuizQuestion({ newPhrase, setCanProceed, canProceed, children }: { newPhrase: PhraseType, setCanProceed: React.Dispatch<React.SetStateAction<boolean>>, canProceed: boolean, children: ReactElement | null }) {
    const [displayedOption, setDisplayedOption] = useState("____________")
    const [attemptCounter, setAttemptCounter] = useState(0)
    const { user } = useContext(AuthContext)
    const optionList: Array<string> | null = useContext(NewPhrasesContext).optionList
    const { checkAnswer } = useNewPhrases()

    const saveNewUserPhrase = () => {
        if (newPhrase.id && user?.id) {
            const newUserPhrase = {
                phraseId: newPhrase.id,
                userId: Number(user.id),
                timesSeen: 1,
                timesAttempted: attemptCounter,
                timesUsed: 0,
                status: 'WIP'
            }
            return postUserPhrase(newUserPhrase)
        }
    }
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setDisplayedOption(e.target.value)
    }
    const check = () => {
        if (!checkAnswer(displayedOption, newPhrase)) {
            setCanProceed(false)
            setAttemptCounter(1 + attemptCounter)
            return
        }
        setAttemptCounter(1 + attemptCounter)
        saveNewUserPhrase()
        setCanProceed(true)
    }

    return (
        <>
            <section className="medium-section-dimensions section-colors quizQuestion">
                <GappedParagraph option={displayedOption} newPhrase={newPhrase} />
                <select onChange={handleChange}>
                    {
                        optionList?.map((option, index) => (
                            <option key={'option' + index} value={option}>{option}</option>
                        ))
                    }
                </select>
                {canProceed ? children : <button className="bottom-right-button" onClick={check}>check</button>}
            </section>
        </>
    )
}

export { QuizQuestion }
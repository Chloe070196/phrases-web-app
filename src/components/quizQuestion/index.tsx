import { PhraseType } from "../../types"
import { ReactElement, useContext, useState } from "react"
import { GappedParagraph } from "../gappedParagraph"
import "./style.css"
import { useNewPhrases } from "../../hooks/useNewPhrases"
import { AuthContext } from "../../context/auth"
import { QuizQuestionNav } from "../quizQuestionNav"
import { QuizOptions } from "../quizOptions"
import { QuizHint } from "../quizHint"

function QuizQuestion({ newPhrase, setCanProceed, canProceed, displayedOptionStyle, setDisplayedOptionStyle, children }: { newPhrase: PhraseType, setCanProceed: React.Dispatch<React.SetStateAction<boolean>>, canProceed: boolean, displayedOptionStyle: string, setDisplayedOptionStyle: React.Dispatch<React.SetStateAction<string>>, children: ReactElement | null }) {
    
    const [displayedOption, setDisplayedOption] = useState("____________")
    const [displayMeaning, setDisplayMeaning] = useState(false)
    const [attemptCounter, setAttemptCounter] = useState(0)
    const { user } = useContext(AuthContext)
    const { saveNewUserPhrase } = useNewPhrases()
    const { checkAnswer } = useNewPhrases()

    const check = () => {
        if (!checkAnswer(displayedOption, newPhrase)) {
            setCanProceed(false)
            setAttemptCounter(1 + attemptCounter)
            setDisplayedOptionStyle("incorrect-answer")
            return
        }
        setAttemptCounter(1 + attemptCounter)
        saveNewUserPhrase(user, newPhrase, attemptCounter)
        setDisplayedOptionStyle("correct-answer")
        setCanProceed(true)
    }

    return (
        <>
            <section className="medium-section-dimensions section-colors quizQuestion">
                <GappedParagraph option={displayedOption} newPhrase={newPhrase} displayedOptionStyle={displayedOptionStyle} />
                <QuizOptions setDisplayedOption={setDisplayedOption} />
                <QuizHint meaning={newPhrase.meaning} displayMeaning={displayMeaning} />
                <QuizQuestionNav
                    canProceed={canProceed}
                    setDisplayMeaning={setDisplayMeaning}
                    displayMeaning={displayMeaning}
                    check={check}>
                    {children}
                </QuizQuestionNav>
            </section>
        </>
    )
}

export { QuizQuestion }
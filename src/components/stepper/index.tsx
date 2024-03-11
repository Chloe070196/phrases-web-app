import { useEffect, useState } from "react"
import { SetUpQuiz } from "../setup-quiz"
import { QuizQuestion } from "../quiz-question"
import { PhraseType } from "../../types"

function Stepper() {
    const [currentStep, setCurrentStep] = useState<string | null>("0")
    const [canProceed, setCanProceed] = useState(false)
    const [newPhrases, setNewPhrases] = useState<Array<PhraseType> | null>(null)

    const handleStepCompletion = async () => {
        if (!canProceed) {
            return
        }
        const newStep = Number(currentStep) + 1
        localStorage.setItem("currentQuizStep", `${newStep}`)
        setCurrentStep(`${newStep}`)
        setCanProceed(false)
    }
    const resetQuiz = () => {
        localStorage.setItem("currentQuizStep", "0")
        setCurrentStep("0")
    }
    const handlePageReload = () => {
        const storedStep = localStorage.getItem("currentQuizStep")
        if (!storedStep) {
            setCurrentStep("0")
            localStorage.setItem("currentQuizStep", "0")
            return
        }
        setCurrentStep(storedStep)
    }

    useEffect(handlePageReload, [])

    if (currentStep === "0") {
        return (
            <>
                <SetUpQuiz setNewPhrases={setNewPhrases} handleStepCompletion={handleStepCompletion} setCanProceed={setCanProceed} />
            </>
        )
    }

    if (newPhrases && Number(currentStep) > 0 && Number(currentStep) < newPhrases?.length) {
        const i = Number(currentStep) - 1
        return (
            <>
                <QuizQuestion canProceed={canProceed} setCanProceed={setCanProceed} newPhrase={newPhrases[i]} >
                    <button className="bottom-right-button" onClick={handleStepCompletion}>next</button>
                </QuizQuestion>
                <button onClick={resetQuiz}>restart</button>
            </>
        )
    }
    return (
        <>
            <button onClick={resetQuiz}>exit</button>
        </>
    )
}

export { Stepper }
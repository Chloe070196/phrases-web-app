import { useEffect, useState } from "react"
import { SetUpQuiz } from "../setup-quiz"

function Stepper() {
    const [currentStep, setCurrentStep ] = useState<string | null>("0")
   
    const handleStepCompletion = async () => {
        const newStep = Number(currentStep) + 1
        localStorage.setItem("currentQuizStep", `${newStep}`)
        setCurrentStep(`${newStep}`)
    }

    const resetQuiz = () => {
        localStorage.setItem("currentQuizStep", "0")
        setCurrentStep("0")
    }

    const handlePageReload = () => {
        const storedStep = localStorage.getItem("currentQuizStep")
        setCurrentStep(storedStep)
    }

    useEffect(handlePageReload, [])

    if (currentStep === "0") {
        return (
            <>
                <SetUpQuiz handleStepCompletion={handleStepCompletion}/>
            </>
        )
    }

    if (currentStep === "1") {
        return (
            <>
                <p>You made it to step 1</p>
                <button onClick={resetQuiz}>Start again</button>
            </>
        )
    }
    return (
        <>
        
        </>
    )
}

export { Stepper }
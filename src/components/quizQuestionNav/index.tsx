import { ReactElement } from "react"

function QuizQuestionNav({ children, canProceed, setDisplayMeaning, displayMeaning, check }: {children: ReactElement| null, canProceed: boolean, setDisplayMeaning:  React.Dispatch<React.SetStateAction<boolean>>, displayMeaning: boolean, check: () => void}) {
    const toggleDisplayMeaning = () => {
        setDisplayMeaning(!displayMeaning)
    }

    return (
        <>

            {
                canProceed ?
                    children :
                    <section className="bottom-right-button">
                        <button onClick={toggleDisplayMeaning}>Hint</button>
                        <button onClick={check}>check</button>
                    </section>
            }
        </>
    )
}

export { QuizQuestionNav }
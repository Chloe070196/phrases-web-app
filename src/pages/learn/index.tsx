import { Stepper } from "../../components/stepper"
import { NewPhrasesProvider } from "../../context/newPhrases"

function LearnPage() {
    return (
        <>
            <main>
                <NewPhrasesProvider>
                    <Stepper />
                </NewPhrasesProvider>
            </main>
        </>
    )
}

export { LearnPage }
import { PhraseType } from "../../types"

function QuizQuestion({ newPhrase } : { newPhrase: PhraseType}) {
    return (
        <>
        <h3>{newPhrase.example}</h3>
        <p>option1</p>
        <p>option2</p>
        <p>option3</p>
        </>
    )
}

export {QuizQuestion}
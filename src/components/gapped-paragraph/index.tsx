import { PhraseType } from "../../types"

function GappedParagraph({ option, newPhrase }: { option: string, newPhrase: PhraseType }) {
    const { content, example } = newPhrase
    const gapIndex = example.toLowerCase().indexOf(content.toLowerCase())
    const textBeforeGap = example.slice(0, gapIndex)
    const textAfterGap = example.slice(gapIndex + content.length, example.length - 1)

    return (
        <>
            <h3 className="questionContext">{textBeforeGap}<span className="questionGap">{option}</span>{textAfterGap}</h3>
        </>
    )
}

export { GappedParagraph }
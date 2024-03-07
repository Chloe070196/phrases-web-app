import type { PhraseType } from "../../types"

function PhraseCard({ phrase }: { phrase: PhraseType }) {
    return (
        <li className="small-section-dimensions section-colors">
            <h3>{phrase.content}</h3>
            <p>{phrase.meaning}</p>
            <p>{phrase.example}</p>
        </li>
    )
}

export { PhraseCard }
import type { UserPhraseType } from "../../types"

function UserphraseCard({ userphrase }: { userphrase: UserPhraseType }) {
    return (
        <li className="small-section-dimensions section-colors">
            <h3>{userphrase.phrase.content}</h3>
            <p>{userphrase.phrase.meaning}</p>
            <p>{userphrase.phrase.shortExample}</p>
            <strong>{userphrase.status}</strong>
        </li>
    )
}

export { UserphraseCard }
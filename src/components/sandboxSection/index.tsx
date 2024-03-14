import { UserPhraseType } from "../../types"
import { Sandbox } from "../sandbox"

function SandboxSection({userphraseList}: {userphraseList: Array<UserPhraseType> | null}) {
    return (
        <>
            <section>
                <h2>Sandbox</h2>
                <h3>Practice using the phrases you've learnt!</h3>
                <Sandbox userphraseList={userphraseList}/>
            </section>
        </>
    )
}

export { SandboxSection }
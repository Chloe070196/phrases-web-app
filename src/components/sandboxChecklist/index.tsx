import { ChangeEvent } from "react"
import { UserPhraseType } from "../../types"

function SandboxCheckList({ userphraseList, userphrasesId, setUserphrasesId }: { userphraseList: Array<UserPhraseType> | null, userphrasesId: Array<number>, setUserphrasesId: React.Dispatch<React.SetStateAction<Array<number>>> }) {
    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (userphrasesId.includes(Number(e.target.id))) {
            return
        }
        setUserphrasesId([...userphrasesId, Number(e.target.id)])
    }
    return (
        <>
            <div className="checklist-wrapper">
                <h3>Checklist</h3>
                <div className="sandox-checklist scrollable-wrapper">
                    {userphraseList?.map((userphrase, index) => (
                        <label key={'checkbox' + index}>
                            <input type="checkbox" id={`${userphrase.phrase.id}`} onChange={handleCheckboxChange} />
                            <p>{userphrase.phrase.content}</p>
                        </label>
                    ))}
                </div>
            </div>
        </>
    )
}

export { SandboxCheckList }
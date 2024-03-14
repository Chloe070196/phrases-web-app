import { FormEvent, useCallback, useContext, useState } from "react"
import { postText } from "../../service/apiClient"
import { AuthContext } from "../../context/auth"
import { UserPhraseType } from "../../types"
import { SandboxTextArea } from "../sandboxTextArea"
import { SandboxCheckList } from "../sandboxChecklist"

function Sandbox({ userphraseList }: { userphraseList: Array<UserPhraseType> | null }) {
    const [textContent, setTextContent] = useState<string | undefined>(undefined)
    const [userphrasesId, setUserphrasesId] = useState<Array<number>>([])
    const { user } = useContext(AuthContext)
    const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!user) {
            alert('log in again, please')
            return
        }
        if (!textContent) {
            alert('nothing to send here!')
            return
        }
        const text = {
            content: textContent,
            userId: Number(user.id),
            userphrasesId: userphrasesId
        }
        await postText(text)
    }, [textContent, user, userphrasesId])
    
    return (
        <>
            <form onSubmit={handleSubmit} className="sandbox-form">
                <SandboxTextArea textContent={textContent} setTextContent={setTextContent} />
                <SandboxCheckList setUserphrasesId={setUserphrasesId} userphrasesId={userphrasesId} userphraseList={userphraseList}/>
                <button className="bottom-right-button" type="submit">Save</button>
            </form>
        </>
    )
}

export { Sandbox }
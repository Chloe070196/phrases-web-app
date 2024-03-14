import { ChangeEvent } from "react"

function SandboxTextArea({ textContent, setTextContent }: { textContent: string | undefined, setTextContent: React.Dispatch<React.SetStateAction<string | undefined>> }) {

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => { setTextContent(e.target.value) }
    return (
        <>
            <div className="sandbox-area-wrapper">
                <textarea className="section-colors" id="practice-area" placeholder="EXAMPLE: I had to grab the bull by the horns the other day when..." value={textContent} onChange={handleChange} />
            </div>
        </>
    )
}

export { SandboxTextArea }
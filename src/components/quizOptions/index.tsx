import { ChangeEvent, useContext} from "react"
import { NewPhrasesContext } from "../../context/newPhrases"

function QuizOptions({ setDisplayedOption }: {  setDisplayedOption: React.Dispatch<React.SetStateAction<string>>}) {
    const { optionList } = useContext(NewPhrasesContext)
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setDisplayedOption(e.target.value)
    }

    return (
        <>
            <select onChange={handleChange}>
                {
                    optionList?.map((option, index) => (
                        <option key={'option' + index} value={option}>{option}</option>
                    ))
                }
            </select>

        </>
    )
}

export { QuizOptions }
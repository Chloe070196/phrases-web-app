import { PhraseType } from "../../types"
import { PhraseCard } from "../phraseCard"

function PhraseList({ phraseList }: {phraseList: Array<PhraseType>}) {
    if (phraseList) {
        return (
            <>
                <div className="section-top-blur-wrapper">
                    <section className="scrollable-wrapper">
                        <ul className="grid-rows-four scrollable">
                            {[phraseList.map((phrase: PhraseType, index: number) => (
                                <PhraseCard phrase={phrase} key={"phrasecard" + index} />
                            ))]}
                        </ul>
                    </section>
                    <div className="blurred-element"></div>
                </div>
            </>
        )
    }
    return (<></>)

}

export { PhraseList }
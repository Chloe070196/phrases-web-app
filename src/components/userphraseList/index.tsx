import { UserPhraseType } from "../../types"
import { UserphraseCard } from "../userphraseCard"

function UserphraseList({ userphraseList }: { userphraseList: Array<UserPhraseType> }) {
    if (userphraseList) {
        return (
            <>
                <div className="section-top-blur-wrapper">
                    <section className="scrollable-wrapper">
                        <ul className="grid-rows-four scrollable">
                            {[userphraseList.map((userphrase: UserPhraseType, index: number) => (
                                <UserphraseCard userphrase={userphrase} key={"userphrasecard" + index} />
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

export { UserphraseList }
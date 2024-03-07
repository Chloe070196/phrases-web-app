import { LeftAside } from "../../components/left-aside"
import { PhraseList } from "../../components/phraseList"

const username = 'mockusername'
const daysNum = 3
const phrasesNum = 34


const mockLearntPhraseList = [
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        meaning: "Velit, temporibus quia explicabo officiis quo ea recusandae cupiditate iste nesciunt veniam qui molestiae magni quae consequatur fuga maiores ratione quis error!",
        example: "Cupiditate molestiae libero commodi quibusdam labore nihil veritatis placeat illo?"
    },
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        meaning: "Velit, temporibus quia explicabo officiis quo ea recusandae cupiditate iste nesciunt veniam qui molestiae magni quae consequatur fuga maiores ratione quis error!",
        example: "Cupiditate molestiae libero commodi quibusdam labore nihil veritatis placeat illo?"
    },
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        meaning: "Velit, temporibus quia explicabo officiis quo ea recusandae cupiditate iste nesciunt veniam qui molestiae magni quae consequatur fuga maiores ratione quis error!",
        example: "Cupiditate molestiae libero commodi quibusdam labore nihil veritatis placeat illo?"
    },
]


function Home() {
    return (
        <>
            <LeftAside />
            <main>
                <h1>Welcome, {username}!</h1>
                <h3>Last practice sessions: <strong>{daysNum}</strong> days ago</h3>
                <h3>Phrases learnt: <strong>{phrasesNum}</strong></h3>
                <PhraseList phraseList={mockLearntPhraseList}/>
            </main>
        </>
    )
}
export { Home }
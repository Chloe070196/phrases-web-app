import { LeftAside } from "../../components/left-aside"

const username = 'mockusername'
const daysNum = 3
const phrasesNum = 34

function Home() {
    return (
        <>
            <LeftAside />
            <main>
                <h1>Welcome, {username}!</h1>
                <h3>Last practice sessions: <strong>{daysNum}</strong> days ago</h3>
                <h3>Phrases learnt: <strong>{phrasesNum}</strong></h3>
            </main>
        </>
    )
}
export { Home }
import { useContext } from "react"
import { AuthContext } from "../../context/auth"

function LogOutButton() {
    const {setUser} = useContext(AuthContext)
    const handleLogOut = () => {
        setUser(null)
    }
    return(
        <>
            <button onClick={handleLogOut}>Log out</button>
        </>
    )
}

export { LogOutButton }
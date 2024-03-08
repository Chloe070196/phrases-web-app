import { useAuth } from "../../hooks/useAuth"

function LogOutButton() {
    const {onLogOut} = useAuth()
    return(
        <>
            <button onClick={onLogOut}>Log out</button>
        </>
    )
}

export { LogOutButton }
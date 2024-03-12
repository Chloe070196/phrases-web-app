import { useAuth } from "../../hooks/useAuth"

function LogOutButton() {
    const {onLogOut} = useAuth()
    return(
        <>
            <button className="bottom-right" onClick={onLogOut}>Log out</button>
        </>
    )
}

export { LogOutButton }
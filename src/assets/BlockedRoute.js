import { redirect } from "react-router-dom"

const BlockedRoute = ({loginstatus, route}) => {
    if (loginstatus === true) {
        return (
            {route}
        )
    } else {
        return (
            redirect('/')
        )
    }
}
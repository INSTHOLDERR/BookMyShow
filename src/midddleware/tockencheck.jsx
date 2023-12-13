import { Navigate } from "react-router-dom";

function TokenCheck({ children }) {
    let token = localStorage.getItem("token")
    if (token) {
        return children;
    }
    return (<Navigate to={"/login"} />)
}

export default TokenCheck;
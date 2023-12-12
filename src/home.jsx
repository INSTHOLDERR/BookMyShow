 
 import { Link } from "react-router-dom";
 function Home(){
    return(
        <>
        <h2>Navigation</h2>
        <span><Link to={"/"}>Home</Link></span>
        <span><Link to={"/register"}>Register</Link></span>
        </>
    
    )
}

export default Home;
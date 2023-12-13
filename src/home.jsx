 
import { useNavigate } from "react-router-dom";
 
function Home(){
   const navigate= useNavigate()

   function logout(){
       localStorage.removeItem("token")
       navigate("/login");
   }
   function add(){
    navigate("/addmovies");
   }
   return(
       <>  
       <h2>Profile</h2>
       <button onClick={logout}>Logout</button>
       <button onClick={add}>addmovies</button>
       </>
   )
}

export default Home;
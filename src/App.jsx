import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./home";
import Register from "./register";
import Login from "./login";
import Addmovies from "./addmovies";
import TokenCheck from "./midddleware/tockencheck";





function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Register/>}/>
            <Route path="/register" element={<TokenCheck><Register/></TokenCheck>}/>
            <Route path="/home" element={<TokenCheck><Home/></TokenCheck>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/addmovies" element={<Addmovies/>}/>
            <Route path="/*" element={<h1>PAGE NOT FOUND 404</h1>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;
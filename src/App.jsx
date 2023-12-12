import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./home";
import Register from "./register";




function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/*" element={<h1>PAGE NOT FOUND 404</h1>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;
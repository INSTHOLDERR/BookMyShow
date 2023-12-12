import React from "react";
import ReactDOM from "react-dom/client";

import App from './App.jsx';

let root = document.getElementById("root");

// class Page extends React.Component{
//     constructor(){
//         super();
//     }
//     render(){
//         return(
//             <h1>hello world</h1>
//         )
//     }
// }

ReactDOM.createRoot(root).render(<App />)
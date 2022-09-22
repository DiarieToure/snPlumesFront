// import { Navbar } from "./homePage/topbar/topbar";
import Home from "./homePage/home/Home";
import {Routes,Route  } from "react-router-dom";
import Login from "./Pages/Profil/login/login"
import Register from "./Pages/Profil/register/register"


function App() {

  return (
    <div className="App">   
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

        </Routes>
        
        
    </div>
  );
}

export default App;

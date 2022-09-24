// import { Navbar } from "./homePage/topbar/topbar";
import Home from "./homePage/home/Home";
import {Routes,Route  } from "react-router-dom";
import Login from "./Pages/login/login"
import Register from "./Pages/register/register"
import Dashboard from "./Pages/Profil/dashboard";
import {Navigate} from "react-router-dom"


function App() {

  return (
    <div className="App">   
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>

          <Route path="/redirect/register" element={ <Navigate to="/login" /> } />

        </Routes>
        
        
    </div>
  );
}

export default App;

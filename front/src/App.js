// import { Navbar } from "./homePage/topbar/topbar";
import Home from "./homePage/home/Home";
import {Routes,Route  } from "react-router-dom";
import Login from "./Pages/login/Login"
import Register from "./Pages/register/Register"
import Dashboard from "./Pages/Profil/dashboard";
import {Navigate} from "react-router-dom"
import Forum from "./Pages/forum/forum";
import List from "./Pages/forum/List";
import MyPost from "./Pages/forum/myPost";


function App() {

  return (
    <div className="App">   
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/myPost" element={<MyPost/>}/>

          <Route path="/redirect/register" element={ <Navigate to="/login" /> } />

        </Routes>
        
        
    </div>
  );
}

export default App;

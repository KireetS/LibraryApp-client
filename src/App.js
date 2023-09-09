import React ,{useState} from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { Route , Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AddBookState from "./Contexts/addbooks/AddBookState";
import MyBooks from "./Components/MyBooks";
import Home from "./Components/Home";
function App() {
  const [login , setLogin] = useState(localStorage.getItem("token"))
  return (
    <>
    <AddBookState>
    <div className="h-screen bg-blue-900">
      <Navbar login={login} setLogin= {setLogin}/>
      
      <Routes>
      <Route path="/login" element={<Login setLogin={setLogin}/>}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path ="/mybooks" element = {<MyBooks/>}/>
      <Route path ="/" element = {<Home/>}/>
      </Routes>
      </div>
      </AddBookState>
    </>
  );
}

export default App;

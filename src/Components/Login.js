import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const  {setLogin} = props
  const navigate = useNavigate();
  const loginHandler = async()=>{
    try{
      const response = await fetch("http://localhost:5000/api/auth/login" , {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          email : email,
          password : password
        })
      })
      const data = await response.json();
      localStorage.setItem("token" , data.token)
      console.log("login successful")
      navigate("/search")
      setLogin(true)
    }catch(err){
      console.error("error occured while login " ,err)
      setLogin(false)
    }
  }
  return (
    <>
      <div className="min-h-screen bg-blue-900 flex flex-grow items-center justify-center">
        
        <div className=" h-[20rem] w-[20rem] sm:h-[25rem] sm:w-[25rem] md:h-[40rem] md:w-[40rem] bg-blue-950 rounded-xl flex flex-col items-center justify-center">
        <div className="text-4xl md:text-6xl md:p-5 text-gray-200 font-bold mb-10">
          Login
        </div>
          <input
            type="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            placeholder="email"
            name="email"
            className=" text-gray-200 w-[60%] md:w-[75%] md:h-14 h-10 bg-slate-900 rounded-lg p-3 my-3"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            name="password"
            className="text-gray-200 w-[60%] md:w-[75%] md:h-14  h-10 bg-slate-900 rounded-lg p-3 my-3"
          />
          <div className="flex mt-4 w-[50%] items-center justify-center">
            <button className="font-semibold rounded-lg outline-0 flex items-center justify-center p-2 md:p-4 md:text-lg mx-2 bg-lime-500" onClick={loginHandler}>
               Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

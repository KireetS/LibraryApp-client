import React, { useState } from 'react'

const SignUp = () => {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const createUser = async()=>{
    try{
      await fetch("http://localhost:5000/api/auth/create" , {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          name : name,
          email : email,
          password : password
        })
      })
    }catch(err){
      console.error("error creating this user")
    }
  }
  return (
    <>
      <div className="min-h-screen bg-blue-900 flex flex-grow items-center justify-center">
        
        <div className=" h-[27rem] w-[19rem] sm:h-[33rem] sm:w-[25rem] md:h-[42rem] md:w-[35rem] bg-blue-950 rounded-xl flex flex-col items-center justify-center">
        <div className="text-4xl text-gray-200 font-bold mb-10">
         Sign Up
        </div>
        <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }}  
            className="text-gray-200 w-[60%] md:w-[75%] md:p-4 md:h-14 h-10 bg-slate-900 rounded-lg p-3 my-3 active:outline-0 active:bg-slate-900"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }} 
            className="text-gray-200 md:w-[75%] md:p-4 md:h-14 w-[60%] h-10 bg-slate-900 rounded-lg p-3 my-3"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }} 
            className="w-[60%] md:w-[75%] md:p-4 md:h-14 text-gray-200 h-10 bg-slate-900 rounded-lg p-3 my-3 autofill:bg-slate-900"
          />
          <div className="flex mt-4 w-[50%] items-center justify-center">
            <button className="font-semibold rounded-lg outline-0 flex items-center justify-center p-2 mx-2 bg-lime-500 md:text-xl md:p-4"
            onClick={createUser}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
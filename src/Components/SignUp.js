import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className="min-h-screen bg-blue-900 flex flex-grow items-center justify-center">
        
        <div className="h-[33rem] w-[25rem] bg-blue-950 rounded-xl flex flex-col items-center justify-center">
        <div className="text-4xl text-gray-200 font-bold mb-10">
         Sign Up
        </div>
        <input
            type="text"
            placeholder="name"
            name="name"
            className="text-gray-200 w-[60%] h-10 bg-slate-900 rounded-lg p-3 my-3 active:outline-0 active:bg-slate-900"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            className="text-gray-200 w-[60%] h-10 bg-slate-900 rounded-lg p-3 my-3"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="w-[60%] text-gray-200 h-10 bg-slate-900 rounded-lg p-3 my-3 autofill:bg-slate-900"
          />
          <div className="flex mt-4 w-[50%] items-center justify-center">
            <button className="font-semibold rounded-lg outline-0 flex items-center justify-center p-2 mx-2 bg-lime-500">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
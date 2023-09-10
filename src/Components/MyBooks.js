import React, { useContext, useEffect, useState } from 'react'
import addbookContext from '../Contexts/addbooks/addbookContext'

const MyBooks = () => {
  const {added} = useContext(addbookContext)
  const [books , setBooks] = useState([])
  const [deleted , setDeleted] = useState(false)
  const url = "https://library-app-backend-kfye.onrender.com";
  const deleteBook = async(id)=>{
    try{
      await fetch(`${url}/api/books/delete/${id}` , {
        method : "DELETE",
        headers : {
          "Content-Type" : "application/json",
          "auth-token" : localStorage.getItem("token")
        }
      })
      console.log("deleted the book")
      setDeleted(true)
      setTimeout(()=>{setDeleted(false)} ,50)
    }catch(err){
      console.error("error while deleting books" , err)
    }
  }
  const fetchMybooks = async ()=>{
    try{
      const response = await fetch(`${url}/api/books/mybooks` , {
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
          "auth-token" : localStorage.getItem("token")
        }
      })
      const data = await response.json()
      setBooks(data)
    }catch(err){
      console.error("error occured while fetching your books , extremely sorry " ,err)
    }
  }
  useEffect(()=>{
    fetchMybooks()
    console.log(1)
  } , [deleted , added])
  return (
    <>
      <div className="flex min-h-screen flex-wrap items-center justify-center bg-blue-900">
        {books.length > 0 &&
          books.map((book) => (
            <div key={book._id}>
              <div className=" w-72 sm:w-44 rounded-lg bg-blue-800 flex flex-col items-center justify-center p-5 m-6 flex-grow">
                {/* image */}
                <div>
                  <img
                    src={book.thumbnail}
                    alt="xx"
                    className="h-40 w-36 p-2"
                  />
                </div>
                {/* title */}
                <div className="p-2 text-gray-200 text-lg text-center font-semibold">
                  {book.name}
                </div>
                {/* author */}
                <div className="p-1 text-gray-200 text-sm text-center font-thin">
                  {book.author}
                </div>

                <div>
                  <button
                    className="bg-red-600 p-3 text-sm rounded-lg mx-2 h-8 font-semibold flex items-center justify-center my-2 text-gray-200"
                    onClick={()=>{
                      deleteBook(book._id)
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default MyBooks
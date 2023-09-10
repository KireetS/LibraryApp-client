import { useState } from "react";
import AddbookContext from "./addbookContext";

const AddBookState = (props)=>{
  const [added , setAdded] =useState(false);
  const url = "https://library-app-backend-kfye.onrender.com";
  const addBook = async (name , author , thumbnail)=>{
    try{
      await fetch(`${url}/api/books/add` , {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          "auth-token" : localStorage.getItem("token")
        },
        body : JSON.stringify({
          name : name,
          author : author,
          thumbnail : thumbnail
        })
      })
      console.log("book added successfully ")
      setAdded(true)
      setTimeout(()=>{setAdded(false)},50)
    }catch(err){
      console.error("error occured while login " ,err)
    }
  }
  return(
    <AddbookContext.Provider value={{addBook , added}}>
      {props.children}
    </AddbookContext.Provider>
  )
}
export default AddBookState
import React, { useEffect, useState } from "react";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [press , setPressed] = useState(false)
  const api = process.env.REACT_APP_API;
  const fetchData = async (s) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${s}&key=${api}&startIndex=${startIndex}&maxResults=40`
      );
      const data = await response.json();
      if(data.items){
        setBooks(data.items);
      }else{
        setBooks([])
      }
      console.log("fetched");
    } catch (err) {
      console.error(`error fetching items with ${searchTerm} `, err);
      setBooks([]);
    }
  };

  const limitTitle = (s) => {
    if (s.length > 17) {
      return s.substr(0, 17) + "..";
    }
    return s;
  };

  useEffect(() => {
    if (searchTerm !== "") {
      let s = searchTerm;
      s = s.replace(/ /g, "-");
      fetchData(s);
    }
    // eslint-disable-next-line
  },[press , startIndex]);
  return (
    <>
      {/* search bar */}
      <div
        id="searchbar"
        className="bg-blue-900 flex items-center justify-center flex-grow p-5"
      >
        <input
          type="text"
          className="bg-slate-900 text-gray-200 h-12 w-[70%] rounded-lg p-3 mx-2"
          placeholder="Search Book Name , title , author"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <button
          className="bg-lime-500 p-3 text-base rounded-lg mx-2 h-10 font-semibold flex items-center justify-center"
          onClick={() => {
            setStartIndex(0)
            setPressed(true);
            setTimeout(()=>{
              setPressed(false)
            },50)
          }}
        >
          Search
        </button>
      </div>
      {/* books */}
      <div className="flex min-h-screen flex-wrap items-center justify-center bg-blue-900">
        {books.length > 0 &&
          books.map((book) => (
            <div key={book.id}>
              <div className=" w-44 rounded-lg bg-blue-800 flex flex-col items-center justify-center p-5 m-6 flex-grow">
                {/* image */}
                <div>
                  <img
                    src={
                      book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : "https://media.istockphoto.com/id/949118068/photo/books.jpg?s=612x612&w=is&k=20&c=jE5ghXhOcK44XdFOdIl62CDkmW1SymnYe0XBc23qus8="
                    }
                    alt="xx"
                    className="h-40 w-36 p-2"
                  />
                </div>
                {/* title */}
                <div className="p-2 text-gray-200 text-lg text-center font-semibold">
                  {book.volumeInfo.title
                    ? limitTitle(book.volumeInfo.title)
                    : "no title"}
                </div>
                {/* author */}
                <div className="p-1 text-gray-200 text-sm text-center font-thin">
                  {book.volumeInfo.authors
                    ? limitTitle(book.volumeInfo.authors[0])
                    : "author not mentioned"}
                </div>
                <div>
                  <button className="bg-lime-500 p-3 text-sm rounded-lg mx-2 h-8 font-semibold flex items-center justify-center my-2">
                    Add To Library
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* pagination */}
      <div className="flex items-center justify-between p-10 bg-blue-900 h-48">
        <button
          className="bg-lime-500 p-3 text-lg rounded-lg mx-4 h-12 font-semibold flex items-center justify-center  disabled:opacity-50"
          disabled={startIndex === 0 ? true : false}
          onClick={()=>{
            setStartIndex(startIndex - 39)
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          }
        >
          previous
        </button>

        <button
          className="bg-lime-500 p-3 text-lg rounded-lg  h-12 font-semibold flex items-center justify-center mx-4"
          onClick={() => {
            setStartIndex(startIndex + 39);
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          disabled = {books.length < 40 ? true : false}
        >
          next
        </button>
      </div>
    </>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const url = "https://library-app-backend-kfye.onrender.com";
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [name, setName] = useState("Username");
  const toggleNav = () => {
    isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
  };
  const { login, setLogin } = props;
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("token");
    setLogin(false);
    navigate("/login");
  };
  const fetchUserDetails = async () => {
    try {
      if (login) {
        const res = await fetch(`${url}/api/auth/getuser`, {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });
        const data = await res.json();
        setName(data.name);
      }
    } catch (err) {
      console.error("usernamefetch problem ", err);
    }
  };
  useEffect(() => {
    fetchUserDetails();
    console.log(isNavOpen)
    // eslint-disable-next-line
  }, [login]);
  return (
    <>
      <nav className=" flex justify-between bg-blue-950 items-center p-2">
        <div className="text-gray-300 text-3xl stroke-black p-2 font-bold">
          YLibrary
        </div>
        <div className="hidden sm:block">
          <ul className="flex text-gray-300 text-lg items-center ">
            <li className="p-2 ">
              <Link to="/mybooks">My Books</Link>
            </li>
            <li className="p-2 ">
              <Link to="/search">Search</Link>
            </li>
            <li className="p-2">Browse</li>
          </ul>
        </div>
        {/* user */}
        {login && (
          <div className="relative flex justify-center items-center">
            <button
              className="h-10 w-10 bg-red-400 rounded-full mr-4"
              onClick={toggleNav}
            ></button>

            <div
              className={`${
                isNavOpen ? "block" : "hidden"
              } absolute top-[3.75rem] left-[-4.5rem]  bg-slate-700 w-32  rounded-lg`}
            >
              <ul className="text-white font-medium flex flex-col flex-grow items-center p-3">
                <li className="p-1">{name}</li>
                <div className="w-28 rounded-lg h-[1px] bg-gray-500"></div>
                <li className="p-1">
                  <Link to="/mybooks">My Books</Link>
                </li>
                <li className="p-1">
                  <Link to="/search">Search</Link>
                </li>
                <li className="p-1">Settings</li>
                <li className="p-1">
                  <button onClick={signOut}>Sign Out</button>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* user end */}
        {!login && (
          <div className="relative flex justify-center items-center">
            <div>
              <button className="font-semibold rounded-lg outline-0 flex items-center justify-center p-1 mx-1 text-base  text-gray-200">
                <Link to="/login">Login</Link>
              </button>
            </div>
            <button className="font-semibold rounded-lg outline-0 flex items-center text-base justify-center p-1 mx-1 text-gray-200 ">
              <Link to="/signup">Sign Up</Link>
            </button>
            <div></div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

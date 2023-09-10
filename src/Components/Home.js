import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  const { login } = props;
  return (
    <>
      <div className="min-h-full min-w-full flex flex-col items-center justify-center bg-blue-900">
        <div className="text-5xl font-bold font-sans text-green-200">
          Welcome my YLibrary
        </div>
        <div className="flex items-center justify-center">
          {!login && <><div>
            <button className="p-3 text-xl font-semibold rounded-lg text-white mx-8 my-10 bg-lime-600">
            <Link to="/login">Login</Link>
            </button>
          </div>
          <div>
            <button className="p-3 text-xl font-semibold rounded-lg text-white mx-8 my-10 bg-lime-600">
                <Link to="/signup">Sign Up</Link>
            </button>
          </div></>}
          {login && <>
          <div>
            <button className="p-3 text-xl font-semibold rounded-lg text-white mx-8 my-10 bg-lime-600">
              <Link to='/search'>Search for the latest book !</Link>
            </button>
          </div></>}
        </div>
      </div>
    </>
  );
};

export default Home;

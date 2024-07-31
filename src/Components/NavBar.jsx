import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const NavBar = () => {
  return (
    <div>
      <div className="bg-violet-700 text-slate-300 flex justify-between p-2 static top-0 w-screen">
        <div className="text-center flex justify-center align-middle ml-10 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-braces-asterisk mr-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6M7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5z"
            />
          </svg>
          <Link to="/" className="text-xl underline-offset-0">CodeSphere.io</Link>
        </div>
        <div className="grid grid-cols-2 mr-10 text-xl">
          <Link to="/web" id="nav" className="text-white underline-offset-0" >WebEditor</Link>
          <Link to="/markdown" id="nav" className="text-white underline-offset-0">Markdown Editor</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

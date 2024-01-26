import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-2">
      <div className="logo">
        <img className="h-16" src={logo} alt="logo" />
      </div>
      <button
        onClick={() => navigate(props.login ? "/login" : "/signup")}
        className={`px-4 py-2 bg-red-600 rounded text-white font-bold ${
          props.login ? "text-lg" : "text-xl"
        }`}
      >
        {props.login ? "Log In" : "Sign Up"}
      </button>
      <style jsx>{`
        @media (max-width: 768px) {
          header {
            padding: 1rem;
          }
          .logo img {
            height: 4rem;
          }
          button {
            padding: 0.5rem 1rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          header {
            padding: 0.5rem;
          }
          .logo img {
            height: 3rem;
          }
          button {
            padding: 0.5rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  );
}
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import Footer from "../Footer/Footer";
import Developers from "../components/Developers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
        // Show success message
    toast.success("Signup successful! Welcome aboard!");
    } catch (error) {
      console.log(error);
      // Show error message
    toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <BackgroundImage />
    
   
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="content absolute inset-0 z-10 bg-gray-900 bg-opacity-50">
      <Header login={"login"} />
        <div className="body flex flex-col items-center justify-center">
          <div className="text text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">
              Unlimited movies, TV shows and more.
            </h1>
            <h4 className="text-2xl mb-4 text-white">Watch anywhere. Cancel anytime.</h4>
            <h6 className="text-xl mb-8 text-white">
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form w-full max-w-md">
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="block w-full p-4 mb-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-900 bg-opacity-50"
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="block w-full p-4 mb-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-900 bg-opacity-50"
              />
            )}
            {!showPassword && (
              <button
                onClick={() => setShowPassword(true)}
                className="block w-full p-4 mb-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-blue-500 focus:border-blue-500"
              >
                Get Started
              </button>
            )}
            {showPassword && (
              <button
                onClick={handleSignUp}
                className="block w-full p-4 mb-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-blue-500 focus:border-blue-500"
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
      <Developers />
      <Footer />
    </div>
    </>
  );
}
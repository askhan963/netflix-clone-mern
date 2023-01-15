import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import Footer from '../Footer/Footer'
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center ">
            <div className="title">
            Sign In
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <button onClick={handleLogin}> Sign In</button>
            </div>
            <div className="signup">
            New to Netflix? <Link className="link" to='/signup'>Sign up now.</Link>
            <br />
            <span className="hero">

            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .signup{
    margin: 80px auto;
    color: #ffffff75;
    .link{
      color: white;
      text-decoration: none;
    }
  }

.hero{
  width: 100%;
  margin: 20px auto;
  color: #ffffff75;
}
.title{
  width: 90%;
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 20px;
}
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      width: 80%;
      height: 85vh;
      margin: 0 auto;
      .form {
        padding: 0 2rem;
        background-color: #000000b0;
        width: 35%;
        height: 100%;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
  
          input {
            padding:  1rem;
            width: 20rem;
            border-radius: 10px;
          }
          button {
            padding:  1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

export default Login;

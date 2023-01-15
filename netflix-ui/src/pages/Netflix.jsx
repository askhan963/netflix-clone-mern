import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Slider from "../components/Slider";
function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const [email, setEmail] = useState("");
  const getMoviesFromRange = (from, to) => {
    
    return movies.slice(from, to);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/login");
      else setEmail(currentUser.email);
    });
},[])
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);

  

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  
  var data = getMoviesFromRange(0,100);
 var x= Math.floor(Math.random() * data.length)
var mv=data[x]
if(!mv){
  mv={
    "id": 453395,
    "name": "Doctor Strange in the Multiverse of Madness",
    "image": "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
    "genres": [
        "Fantasy",
        "Action",
        "Adventure"
    ]
}

}
  return (
    <Container>
      <Navbar isScrolled={isScrolled} email={email} />
      <div className="hero">
        
          
        <img
          src={`https://image.tmdb.org/t/p/original/${mv.image}`}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            {mv.name}
          </div>
          <div className="buttons flex">
            <button
              onClick={() => navigate("/player",{state:{id:mv}})}
              className="flex j-center a-center"
            >
              <FaPlay />
              Play
            </button>
            <button  onClick={() => navigate("/info",{state:{id:mv}})} className="flex j-center a-center">
              <AiOutlineInfoCircle />
              More Info 
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
      height: 100vh;
      width: 100vw;
    }
    img {
      height: 100vh;
      width: 100vw;
     
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
          width: 50%;
          height: 100%;
          margin-left: 5rem;
          font-size: 4rem;
          font-weight: bold;
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
export default Netflix;
// {"adult":false,"backdrop_path":"/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg","belongs_to_collection":{"id":618529,"name":"Doctor Strange Collection","poster_path":"/vIxHQxusmCGOLf3dHnCbVppBV56.jpg","backdrop_path":"/5ZuctJh5uX5L2dz1CjA7WsTJwZk.jpg"},"budget":200000001,"genres":[{"id":14,"name":"Fantasy"},{"id":28,"name":"Action"},{"id":12,"name":"Adventure"}],"homepage":"https://www.marvel.com/movies/doctor-strange-in-the-multiverse-of-madness","id":453395,"imdb_id":"tt9419884","original_language":"en","original_title":"Doctor Strange in the Multiverse of Madness","overview":"Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.","popularity":317.224,"poster_path":"/fwBl3J2aEXru6mrr9Xg8O99Iz2K.jpg","production_companies":[{"id":420,"logo_path":"/hUzeosd33nzE5MCNsZxCGEKTXaQ.png","name":"Marvel Studios","origin_country":"US"},{"id":176762,"logo_path":null,"name":"Kevin Feige Productions","origin_country":"US"}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2022-05-04","revenue":964091059,"runtime":126,"spoken_languages":[{"english_name":"Cantonese","iso_639_1":"cn","name":"广州话 / 廣州話"},{"english_name":"English","iso_639_1":"en","name":"English"},{"english_name":"Spanish","iso_639_1":"es","name":"Español"}],"status":"Released","tagline":"Enter a new dimension of Strange.","title":"Doctor Strange in the Multiverse of Madness","video":false,"vote_average":7.424,"vote_count":6686}

// https://api.themoviedb.org/3/movie/453395?api_key=6d75b2a2e2b05ca51b4dda2ad6426fda

// https://api.themoviedb.org/3/movie/453395?api_key=6d75b2a2e2b05ca51b4dda2ad6426fda&append_to_response=videos
import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../api";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function poster() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      return request;
    }
    poster();
  }, []);

  function truncate(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <header
      className="banner"
      style={{
        width: "100%",
        backgroundSize: "100% 100%",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        WebkitBackgroundSize: "100% 100%",
      }}
    >
      <div className="banner__poster">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      <div className="banner--fadebottom" />
    </header>
  );
}

export default Banner;

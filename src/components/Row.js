import react from "react";
import axios from "../axios";
import requests from "../api";
import { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, islarge }) {
  const prefix = "https://image.tmdb.org/t/p/w500/";
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    async function addMovie() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    addMovie();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  const playTrailer = (item) => {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(item?.name || item?.title || item?.original_name || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailer(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movie.map((item) => (
          <img
            key={item.id}
            onClick={() => playTrailer(item)}
            className={`row__poster ${islarge && "row__posterlarge"}`}
            src={`${prefix}${islarge ? item.poster_path : item.backdrop_path}`}
            alt={item.name}
          />
        ))}
      </div>
      {trailer && <YouTube videoId={trailer} opts={opts} />}
    </div>
  );
}

export default Row;

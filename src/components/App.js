import react from "react";
import request from "../api";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={request.fetchOriginals}
        islarge={true}
      />
      <Row title={"Trending Now"} fetchUrl={request.fetchTrending} />

      <Row title={"Top Rated"} fetchUrl={request.fetchTopRated} />
      <Row title={"Action"} fetchUrl={request.fetchAction} />
      <Row title={"Comedy"} fetchUrl={request.fetchcomedy} />
      <Row title={"Horror"} fetchUrl={request.fetchhorror} />
      <Row title={"Romance"} fetchUrl={request.fetchromance} />
      <Row title={"Documentaries"} fetchUrl={request.fetchdoc} />
    </div>
  );
}

export default App;

// https://image.tmdb.org/t/p/w500/

const APIKEY = "064e92a33754037f235774c71569e3b9";

const requests = {
  fetchTrending: `trending/all/day?api_key=${APIKEY}`,
  fetchOriginals: `discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchAction: `discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchcomedy: `discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchhorror: `discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchromance: `discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchdoc: `discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;

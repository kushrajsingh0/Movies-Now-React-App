import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./MovieDetails.module.css";
import loading from '../resources/Spinner-1s-84px.gif';
import URLs from '../resources/URLs.json';
const tmdbApiKey = URLs.tmdbApiKey;

function MovieDetails() {
  let { movieId } = useParams();
  const arr = movieId.split("-");
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovie, setLoadedmovie] = useState({});
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/"+arr[0]+"/" +
        arr[1] +
        "?api_key="+tmdbApiKey
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedmovie({
          id: data["id"],
          link: data["homepage"],
          img:
            data["poster_path"] == null
              ? "https://upload.wikimedia.org/wikipedia/commons/d/dc/No_Preview_image_2.png"
              : "https://image.tmdb.org/t/p/w500" + data["poster_path"],
          original_title:
            data["original_title"] === data["title"]
              ? ""
              : "(" + data["original_title"] + ")",
          title: data["title"]==null?data["name"]:data["title"],
          tagline: data["tagline"],
          description: data["overview"],
        });
        console.log(loadedMovie);
        setIsLoading(false);
      });
  });
  if (isLoading) {
    return (
      <section className={classes.loading}>
        <img src={loading} alt="loading..." />
      </section>
    );
  }
  return (
    <div className={classes.movieContainer}>
      <div className={classes.movieImage}>
      <video className={classes.video} width="100%" height="400" controls poster={loadedMovie["img"]}>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className={classes.movieDetails}>
        <h1>{loadedMovie["title"] + loadedMovie["original_title"]}</h1>
        {loadedMovie["tagline"]!=="" && (<h3>{loadedMovie["tagline"]}</h3>)}
        <p>{loadedMovie["description"]}</p>
        {loadedMovie["link"]!=="" &&(<a href={loadedMovie["link"]} rel="noreferrer" target="_blank">Official site</a>)}
      </div>
    </div>
  );
}

export default MovieDetails;

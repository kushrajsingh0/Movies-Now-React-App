import PlayListItem from "../components/PlayListItem";
import { useState } from "react";
import classes from "../components/PlayListItem.module.css";
import URLs from '../resources/URLs.json';
const URL = URLs.URL;
function PlayList() {
  const [loadedMovies, setLoadedMovies] = useState([]);
  fetch(
    URL+"users/" +
      localStorage.getItem("userKey") +
      ".json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const movies = [];
      for (const key in data) {
        if (data[key]["id"] !== undefined) {
          const movie = {
            id: data[key]["id"],
            title: data[key]["title"],
            image: data[key]["image"],
            description: data[key]["description"],
            type: data[key]["type"],
          };
          movies.push(movie);
        }
      }
      setLoadedMovies(movies);
    });

  function removeHandler(movieId) {
    fetch(
      URL+"users/" +
        localStorage.getItem("userKey") +
        ".json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const key in data) {
            if (data[key]["id"] === movieId){
                fetch(URL+"users/"+localStorage.getItem("userKey")+"/" + key +".json", {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(res => console.log(res))
            }
        }
      });
  }

  return (
    <ul className={classes.playlistbody}>
      {loadedMovies.map((movie) => (
        <PlayListItem
          key={movie.id}
          id={movie.id}
          image={movie.image}
          title={movie.title}
          description={movie.description}
          type={movie.type}
          onRemove={removeHandler}
        />
      ))}
    </ul>
  );
}

export default PlayList;

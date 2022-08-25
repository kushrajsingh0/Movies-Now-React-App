import { useState, useEffect } from "react";
import MovieList from "../MovieList";
import classes from './PageLayout.module.css';
import loading from '../../resources/Spinner-1s-84px.gif'

function PageLayout(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setLoadedmovies] = useState([]);
  useEffect(() => {
    fetch(props.link)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const movies = [];
        data["results"].forEach((element)=>{
          const movie={
            id:element.id,
            title:element.title==null?element.name:element.title,
            description:element.overview,
            img:element.poster_path==null?"https://upload.wikimedia.org/wikipedia/commons/d/dc/No_Preview_image_2.png":"https://image.tmdb.org/t/p/w500"+element.poster_path,
            rating:element.vote_average
          };
          movies.push(movie);
        })
        setIsLoading(false);
        setLoadedmovies(movies);
      });
  });
  
 if(isLoading){
   return <section className={classes.loading}>
     <img src={loading} alt="loading..." />
   </section>;
 }
  return <MovieList movies={loadedMovies} type={props.type} />;
}

export default PageLayout;

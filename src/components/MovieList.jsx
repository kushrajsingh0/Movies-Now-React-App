import MovieItem from "./MovieItem";
import classes from './MovieList.module.css';
function MovieList(props){
    return <ul className={classes.list}>
    {props.movies.map((movie)=>(
      <MovieItem key={movie.id} id={movie.id} image={movie.img} title={movie.title} description={movie.description} rating={movie.rating} type={props.type} />
    ))}
  </ul>
}

export default MovieList;
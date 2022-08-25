import PageLayout from "../components/layouts/PageLayout";
import URLs from '../resources/URLs.json';
const tmdbApiKey = URLs.tmdbApiKey;

function TvShows(){
    return <PageLayout link={"https://api.themoviedb.org/3/tv/popular?api_key="+tmdbApiKey} type="tv" />
}

export default TvShows;
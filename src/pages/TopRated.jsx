import PageLayout from "../components/layouts/PageLayout";
import URLs from '../resources/URLs.json';
const tmdbApiKey = URLs.tmdbApiKey;

function TopRated(){
    return <PageLayout link={"https://api.themoviedb.org/3/movie/top_rated?api_key="+tmdbApiKey} />
}

export default TopRated;
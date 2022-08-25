import PageLayout from "../components/layouts/PageLayout";
import URLs from '../resources/URLs.json';
const tmdbApiKey = URLs.tmdbApiKey;

function Popular(){
    return <PageLayout link={"https://api.themoviedb.org/3/movie/popular?api_key="+tmdbApiKey} />
}

export default Popular;
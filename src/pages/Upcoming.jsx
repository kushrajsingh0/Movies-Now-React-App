import PageLayout from "../components/layouts/PageLayout";
import URLs from '../resources/URLs.json';
const tmdbApiKey = URLs.tmdbApiKey;

function Upcoming(){
    return <PageLayout link={"https://api.themoviedb.org/3/movie/upcoming?api_key="+tmdbApiKey} />
}

export default Upcoming;
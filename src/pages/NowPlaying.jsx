import PageLayout from "../components/layouts/PageLayout";
import URLs from '../resources/URLs.json';
const tmdbApiKey = URLs.tmdbApiKey;

function NowPlaying(){
    return <PageLayout link={"https://api.themoviedb.org/3/movie/now_playing?api_key="+tmdbApiKey} />
}

export default NowPlaying;
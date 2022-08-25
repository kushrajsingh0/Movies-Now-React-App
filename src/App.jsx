import { Routes, Route } from "react-router-dom";

import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Layout from "./components/layouts/Layout";
import TvShows from "./pages/TvShows";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PlayList from "./pages/PlayList";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="tv-shows" element={<TvShows />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="playlist" element={<PlayList />} />
        <Route path="watch/:movieId" element={<MovieDetails />} / >
        <Route path="/:page/watch/:movieId" element={<MovieDetails />} / >
      </Routes>
    </Layout>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieGrid from "./components/MovieGrid";
import TvShowGrid from "./components/TvShowGrid";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MovieGrid title="Top rated movies" type="popular" />
      <TvShowGrid />
    </div>
  );
}

export default App;

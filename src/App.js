import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieGrid from "./components/MovieGrid";
import TvShowGrid from "./components/TvShowGrid";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MovieGrid title="New releases" type="popular" />
      <TvShowGrid title="Featured TV shows" type="popular" />
    </div>
  );
}

export default App;

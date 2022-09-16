import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieGrid from "./components/MovieGrid";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MovieGrid title="Top rated movies" type="popular" />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Json from "./Json";
import "./index.css";

function App() {
  const [movies, setMovies] = useState(Json);
  const [filterTitle, setFilterTitle] = useState("");

  const handleFilterTitleChange = (e) => {
    setFilterTitle(e.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(filterTitle.toLowerCase());
  });

  return (
    <div className="tit">
      <h1>
        <a href="http://localhost:3000/">UrMovies</a>
      </h1>
      <Filter onFilterTitleChange={handleFilterTitleChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;

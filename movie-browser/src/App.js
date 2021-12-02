import { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    if (searchText) {
      setSearchLoading(true);
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=dd33a661f205b8261aad63b04c33ef42&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then(({ results }) => {
          setSearchResults(results);
          setSearchLoading(false);
        });
    }
  }, [searchText]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <>
      <Navbar setSearchText={handleSearch} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/search"
          component={() => (
            <Search
              keyword={searchText}
              searchResults={searchResults}
              isLoading={searchLoading}
            />
          )}
        />
        <Route path="/movies/:id" component={MovieDetails} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

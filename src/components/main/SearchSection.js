import React, { useState, /*useRef, */ useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SearchNewElem from "./SearchNewElem";
import ResultsList from "./ResultsList";
import getBooksFromApi from "../../services/books";
import localStorage from "../../localStorage/index";
import getMoviesFromApi from "../../services/movies";
// import getMusicFromApi from "../../services/music";
import getArtFromAPI from "../../services/art";

const SearchSection = props => {
  const { books, movies, art, updateFavs } = props;
  const [searchText, setSearchText] = useState("");
  const [searchSubject, setSearchSubject] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [favsSearchSubject, setFavsSearchSubject] = useState([]);

  // const searchTextRef = useRef(null);

  // useEffect(() => {
  //   searchTextRef.current.focus();
  // }, [searchTextRef]);

  useEffect(() => {
    localStorage.set("searchText", searchText);
  }, [searchText]);

  useEffect(() => {
    if (searchSubject === "books") {
      setFavsSearchSubject(books);
    }
    if (searchSubject === "movies") {
      setFavsSearchSubject(movies);
    }
    if (searchSubject === "art") {
      setFavsSearchSubject(art);
    }
  }, [books, art, movies, searchSubject]);

  // const suitableAPI = searchSub => {
  //   const mapping = {
  //     books: getBooksFromApi,
  //     movies: getMoviesFromApi,
  //     art: getArtFromAPI
  //     // "music": getMusicFromApi
  //   };
  //   return mapping[searchSub];
  // };

  const search = () => {
    setIsLoading(true);
    // [suitableAPI(searchSubject)](searchText).then(data........)

    if (searchSubject === "books") {
      getBooksFromApi(searchText).then(data => {
        setResults(data);
        setIsLoading(false);
      });
    }
    if (searchSubject === "movies") {
      getMoviesFromApi(searchText).then(data => {
        setResults(data);
        setIsLoading(false);
      });
    }
    if (searchSubject === "art") {
      getArtFromAPI(searchText).then(data => {
        setResults(data);
        setIsLoading(false);
      });
    }
  };

  return (
    <Switch>
      <Route path="/search" exact>
        <SearchNewElem
          searchSubject={searchSubject}
          handleSelectChange={value => setSearchSubject(value)}
          handleSearchText={value => setSearchText(value)}
          search={search}
          searchText={searchText}
          // searchTextRef={searchTextRef}
        />
      </Route>

      <Route path="/search/results">
        <ResultsList
          items={results}
          favsSearchSubject={favsSearchSubject}
          notFoundMessage="No hay resultados con ese título"
          loading={isLoading}
          updateFavs={updateFavs}
        />
      </Route>
    </Switch>
  );
};

export default SearchSection;

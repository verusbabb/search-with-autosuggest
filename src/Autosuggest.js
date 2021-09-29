import { useState, useEffect } from "react";
import fetchSuggestions from "./fetchSuggestions.js";
// import SuggestionsList from "./SuggestionsList.js";

const AutoSuggest = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [fetchState, setFetchState] = useState(false);
  let unLinked;

  useEffect(() => {
    setFetchState(true);
    const delayDebounceFn = setTimeout(() => {
      setFilteredSuggestions([]);
      fetchSuggestions(query).then((result) => {
        unLinked = result;
        setFilteredSuggestions(unLinked);
      });
    }, 1000);
    setShowSuggestions(true);
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const onChange = (e) => {
    setQuery(e.target.value);
    setShowSuggestions(false);
    setFilteredSuggestions([]);
  };

  const SuggestionsList = () => {
    return filteredSuggestions.length && showSuggestions ? (
      <ul>
        {filteredSuggestions.map((suggestion, index) => {
          return <li key={suggestion}>{suggestion}</li>;
        })}
      </ul>
    ) : (
      <div>{fetchState && <p>Searching now...</p>}</div>
    );
  };

  return (
    <div>
      <label htmlFor="query">Search for country by name:</label>
      <br />
      <input id="query" onChange={onChange} type="text" />
      {showSuggestions && query && <SuggestionsList />}
    </div>
  );
};
export default AutoSuggest;

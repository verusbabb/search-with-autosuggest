import React from "react";

export default function SuggestionsList({
  filteredSuggestions,
  showSuggestions,
  fetchState,
}) {
  return filteredSuggestions.length && showSuggestions ? (
    <ul>
      {filteredSuggestions.map((suggestion, index) => {
        return <li key={suggestion}>{suggestion}</li>;
      })}
    </ul>
  ) : (
    <div>{fetchState && <p>Searching now...</p>}</div>
  );
}

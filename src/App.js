import React from "react";
import AutoSuggest from "./Autosuggest";
import fetchSuggestions from "./fetchSuggestions.js";

function App() {
  return (
    <div>
      <h1>Auto-Suggest Demo</h1>
      <AutoSuggest suggestions={fetchSuggestions} />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css"; // Import your CSS file for styling

const App = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchData(input);
  }, [input]);

  const fetchData = (query) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(newData.map((item) => item.title));
      })
      .catch((error) => {
        console.log("Error while fetching data:", error);
      });
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked
  };

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => handleInput(e)}
        />
        <button onClick={() => fetchData(input)}>Search</button>
      </div>
      {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion, idx) => (
            <li key={idx} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

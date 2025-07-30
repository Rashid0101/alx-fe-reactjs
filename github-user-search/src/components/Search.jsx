import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");

    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }

    try {
      const res = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await res.json();

      if (data.items && data.items.length > 0) {
        setUsers(data.items);
      } else {
        setUsers([]);
        setError("Looks like we can't find the user.");
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {users.length > 0 &&
          users.map((user) => (
            <div key={user.id} className="border p-4 rounded">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="text-center mt-2">{user.login}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;

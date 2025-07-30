import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setUsers([]);

    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }

    try {
      const res = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await res.json();

      if (data.items?.length) {
        // Fetch detailed user data (to get location)
        const detailedUsers = await Promise.all(
          data.items.map(async (user) => {
            const profileRes = await fetch(user.url); // `url` = https://api.github.com/users/username
            const profileData = await profileRes.json();
            return profileData;
          })
        );
        setUsers(detailedUsers);
      } else {
        setError("Looks like we can't find the user.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users"
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

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.length > 0 &&
          users.map((user) => (
            <div key={user.id} className="border p-4 rounded shadow">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <h2 className="text-center font-bold mt-2">{user.login}</h2>
              <p className="text-center text-sm text-gray-600">
                {user.location ? user.location : "Location not available"}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-600 mt-2 underline"
              >
                View Profile
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;

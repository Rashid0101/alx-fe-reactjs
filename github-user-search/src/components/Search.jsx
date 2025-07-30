import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "0.5rem", width: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem" }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}
      {user && (
        <div style={{ marginTop: "2rem" }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            width={100}
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

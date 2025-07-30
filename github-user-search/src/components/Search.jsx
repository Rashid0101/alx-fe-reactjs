import React from "react";

const SearchResults = ({ users }) => {
  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.login}</h3>
            <img src={user.avatar_url} alt={user.login} width={50} />
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default SearchResults;

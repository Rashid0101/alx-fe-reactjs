import React from "react";

function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ color: "blue", fontSize: "24px" }}>{props.name}</h2>
      <p style={{ margin: "5px 0" }}>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p style={{ margin: "5px 0" }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;

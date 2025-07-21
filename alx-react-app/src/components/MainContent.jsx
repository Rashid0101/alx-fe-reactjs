import React from "react";
import UserProfile from "./UserProfile";

function MainContent() {
  return (
    <main style={{ padding: "20px", backgroundColor: "#e6f2ff" }}>
      <UserProfile
        name="Alice"
        age={28}
        bio="Loves traveling and photography."
      />
      <UserProfile
        name="Bob"
        age={34}
        bio="Avid reader and coffee enthusiast."
      />
    </main>
  );
}

export default MainContent;

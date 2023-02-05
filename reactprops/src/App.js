import React from "react";
import Profile from "./profile/Profile";

function App() {
  const handleName = name => {
    alert(`Hello, ${name}`);
  };

  return (
    <div className="App">
      <Profile
        fullName="Fanta Sy-savane"
        bio="I am a 21 year old geek/part time bad-ass"
        profession="Full-Stack Developer"
        handleName={handleName}
      >
        <img
          src="https://picsum.photos/200"
          alt="Profile"
          style={{ height: 200, width: 200 }}
        />
      </Profile>
    </div>
  );
}

export default App;

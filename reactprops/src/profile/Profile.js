import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ padding: 20, border: "1px solid #ccc" }}>
      {children}
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "John Doe",
  bio: "I am a software developer",
  profession: "Developer"
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default Profile;

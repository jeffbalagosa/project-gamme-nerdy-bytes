import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import { useUserContext } from "../../../useContext/UserContext";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function UserProfile() {
  const { currentUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuthContext();
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    // print token to console with descriptive message
    console.log("UserProfile.js: useEffect: token", token);

    if (!token) {
      setKey(Math.random());
    }

    if (currentUser === null) {
      // refresh the page to clear any stale data
      window.location.reload();
    }

    console.log(
      "UserProfile's Effect Hook Triggered: currentUser",
      currentUser
    );
  }, [token, currentUser]); // Include 'currentUser' in the dependency array

  console.log("Rendering UserProfile: currentUser", currentUser);

  if (currentUser === null || currentUser === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="user-profile">
      <div className="profile-content">
        <h2>Hello {currentUser.username}!</h2>
        <img
          className="profile-img"
          src={currentUser.picture_url}
          alt={`${currentUser.username}'s profile`}
        />
        <p>Profile Picture</p>
      </div>
    </div>
  );
}

export default UserProfile;

import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import { useUserContext } from "../../../useContext/UserContext";

function UserProfile() {
  const { currentUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Effect Hook Triggered: currentUser", currentUser);
    if (currentUser !== undefined) {
      setIsLoading(false);
    }
  }, [currentUser]);

  console.log(
    "Rendering UserProfile: isLoading",
    isLoading,
    "currentUser",
    currentUser
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!currentUser) {
    return <h1>No user logged in</h1>;
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

import React, { useState, useEffect } from "react";

import Calendar from "../../components/dashboard/Calendar/Calendar";
import UserDecks from "../../components/dashboard/UserDecks/UserDecks";
import UserProfile from "../../components/dashboard/UserProfile/UserProfile";

import "./Dashboard.css";

function Dashboard() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getDecks() {
      const url = `${process.env.REACT_APP_API_HOST}/api/deck`;
      const fetchOptions = {
        credentials: "include",
        method: "GET",
      };
      const response = await fetch(url, fetchOptions);
      if (response.ok) {
        const data = await response.json();
        setDecks(data);
      } else {
        console.log("Error fetching decks");
      }
    }
    getDecks();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="d-flex">
        <UserProfile />
        <Calendar />
      </div>
      <UserDecks decks={decks} setDecks={setDecks} />
    </div>
  );
}

export default Dashboard;

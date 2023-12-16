import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import { UserProvider } from "./useContext/UserContext";
import Nav from "./components/shared/Nav/Nav";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginForm from "./pages/Login/LoginForm";
import SignupForm from "./pages/Signup/SignupForm";
import PublicDeck from "./pages/Deck/PublicDeck";
import "./App.css";
import CardList from "./pages/CardList/CardList";
import CreateDeck from "./pages/CreateDeck/CreateDeck";
import Study from "./pages/Study/Study";
import EditDeck from "./pages/EditDeck/EditDeck";
import EditCard from "./pages/EditCard/EditCard";
import Calendar from "./components/dashboard/Calendar/Calendar";
import AddOption from "./pages/CreateOption/AddOption";
import EditOption from "./pages/EditOption/EditOption";
import ChatFlyover from "./components/shared/ChatFlyover/ChatFlyover";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
  const [currentUser, setCurrentUser] = useState(undefined);
  const { token } = useAuthContext();

  useEffect(() => {
    if (!token) {
      return;
    }
    console.log("Effect Hook in App.js Triggered");
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_API_HOST}/token`;
      const fetchOptions = { credentials: "include" };
      const response = await fetch(url, fetchOptions);
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        setCurrentUser(data.account);
      }
    };

    fetchData();
  }, [token]);

  console.log("Rendering App: currentUser", currentUser);

  return (
    <div className="container">
      <BrowserRouter basename={basename}>
        <AuthProvider baseUrl={`${process.env.REACT_APP_API_HOST}`}>
          <UserProvider
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          >
            <Nav />
            {currentUser && <ChatFlyover className="Chatflyover"></ChatFlyover>}
            <Routes>
              <Route exact path="/" element={<LoginForm />}></Route>
              <Route exact path="/calendar" element={<Calendar />}></Route>
              <Route exact path="/dashboard" element={<Dashboard />}></Route>
              <Route exact path="/signup" element={<SignupForm />}></Route>
              <Route
                exact
                path="/:deckId/cardlist"
                element={<CardList />}
              ></Route>
              <Route exact path="/create-deck" element={<CreateDeck />}></Route>
              <Route exact path="/publicdeck" element={<PublicDeck />}></Route>
              <Route
                exact
                path="/:deckId/editdeck"
                element={<EditDeck />}
              ></Route>
              <Route
                exact
                path="/decks/:deckId/cards/:cardId/edit"
                element={<EditCard />}
              ></Route>
              <Route exact path="/:deckId/study" element={<Study />}></Route>
              <Route
                exact
                path="/card/:cardId/option"
                element={<AddOption />}
              ></Route>
              <Route
                exact
                path="/decks/:deckId/cards/:cardId/options/:optionId/edit"
                element={<EditOption />}
              ></Route>
            </Routes>
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;

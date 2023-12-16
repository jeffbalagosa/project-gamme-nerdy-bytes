import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext, useCallback } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { UserContext } from "../../useContext/UserContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useContext(UserContext);
  const { login } = useToken();
  const navigate = useNavigate();

  const fetchAndSetCurrentUser = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_HOST}/token`, {
        credentials: "include", // or other authentication headers as necessary
      });
      if (response.ok) {
        const data = await response.json();
        setCurrentUser(data.account); // Assuming the response has an 'account' object
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  }, [setCurrentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password); // Assuming 'login' returns a success status
    if (success) {
      fetchAndSetCurrentUser();
    }
    navigate("/dashboard");

    e.target.reset();
  };

  return (
    <>
      <div>
        <h1 className="title">NerdyBytes</h1>
        <h4 className="motto">Unleash your potential, one card at a time.</h4>
      </div>
      <div className="login">
        <div>
          <div className="owl">
            <div className="hand hand-l"></div>
            <div className="hand hand-r"></div>
            <div className="arms">
              <div className="arm"></div>
              <div className="arm arm-r"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <div className="control">
              <label htmlFor="username"></label>
              <input
                id="username"
                placeholder="Username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="control">
              <label htmlFor="password"></label>
              <input
                id="password"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="login-btn wrapper">
              <button id="buttons">Login</button>
            </div>
            <div className="signup-btn wrapper" style={{ marginTop: "0.5rem" }}>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <button id="buttons">SignUp</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;

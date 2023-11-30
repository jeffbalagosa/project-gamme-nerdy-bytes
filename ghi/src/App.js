import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignInSide from "./SignIn";

function App() {
    const domain = /https:\/\/[^/]+/;
    const basename = process.env.PUBLIC_URL.replace(domain, "");

    return (
        <div className="container">
            <BrowserRouter basename={basename}>
                <AuthProvider baseUrl="http://localhost:8000">
                    <Routes>
                        <Route
                            exact
                            path="/login"
                            element={<LoginForm />}
                        ></Route>
                        <Route
                            exact
                            path="/signin"
                            element={<SignInSide />}
                        ></Route>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;

import "./App.css";
import Navigation from "./components/routes-nav/Navigation"
import Routes from "./components/routes-nav/Routes"
import jwt from "jsonwebtoken";

// Used for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "mornoonightsnews-token";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;

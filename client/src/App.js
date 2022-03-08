import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<Home />} />
        <Route
          exact
          path="/register"
          element={currentUser ? <Home /> : <Register />}
        />
        <Route exact path="/post/:id" element={<Single />} />
        <Route
          exact
          path="/login"
          element={currentUser ? <Write /> : <Login />}
        />
        <Route
          exact
          path="/write"
          element={currentUser ? <Settings /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;

import Home from "views/Home";
import Login from "./views/Auth";
import Profiles from "./views/Profiles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConfirmOtp from "views/ConfirmOtp";
import Generate from "views/Generation";
import Collection from "views/Collection";
import Playground from "views/Playground/index";
import Profile from "views/Profile";
import { Game } from "views/Game";
import Quest from "views/Quest";
import { GenerateChoose } from "views/Generation-choose";
import { GenerateChoose2 } from "views/Generation-choose2";
import Dashboard from "views/Dashboard";
import Register from "views/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/" element={<Home />} />
        <Route path="/generation" element={<Generate />} />
        <Route path="/registration/confirmOtp" element={<ConfirmOtp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gaming" element={<Game />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/generateChoose" element={<GenerateChoose />} />
        <Route path="/generateChoose2" element={<GenerateChoose2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

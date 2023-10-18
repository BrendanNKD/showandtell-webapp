import Home from "views/Home";
import Login from "./views/Auth";
import Profiles from "./views/Profiles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConfirmOtp from "views/ConfirmOtp";
import Generate from "views/Generation";
import Collection from "views/Collection";
import Playground from "views/Playground";
import Profile from "views/Profile";
import { Game } from "views/Game";
import Quest from "views/Quest";
import Register from "views/Register";
import { GenerateChoose } from "views/Generation-choose";
import { GenerateEmpty } from "views/temp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/" element={<Home />} />
        <Route path="/GenerateChoose" element={<GenerateChoose />} />
        <Route path="/generation" element={<Generate />} />
        <Route path="/registration/confirmOtp" element={<ConfirmOtp />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gaming" element={<Game />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/temp" element={<GenerateEmpty />} />

      </Routes>
    </Router>
  );
}

export default App;

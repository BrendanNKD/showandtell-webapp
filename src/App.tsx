import Home from "views/Home";
import Login from "./views/Auth";
import Profiles from "./views/Profiles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConfirmOtp from "views/ConfirmOtp";
import Generate from "views/Generation";
import Collection from "views/Collection";
import Playground from "views/Playground/indext";
import Profile from "views/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/" element={<Home />} />
        <Route path="/generation" element={<Generate />} />
        <Route path="/registration/confirmOtp" element={<ConfirmOtp />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

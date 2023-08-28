import Home from "views/Home";
import Login from "./views/Auth";
import Profiles from "./views/Profiles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConfirmOtp from "views/ConfirmOtp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registration/confirmOtp" element={<ConfirmOtp />} />
      </Routes>
    </Router>
  );
}

export default App;

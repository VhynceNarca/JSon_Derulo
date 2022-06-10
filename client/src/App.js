import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import Home from "./pages/Index";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cats" element={<Cats />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

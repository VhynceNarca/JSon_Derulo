import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import Home from "./pages/Index";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
import PetDetail from "./pages/PetDetail";
import AddCat from "./pages/AddCat";
import AddDog from "./pages/AddDog";
import EditPet from "./pages/EditPet";
import DeletePet from "./pages/DeletePet";

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
          <Route path="dogs/view/:id" element={<PetDetail/>}/>
          <Route path="cats/view/:id" element={<PetDetail/>}/>
          <Route path="cats/addcat" element={<AddCat />}/>
          <Route path="dogs/adddog" element={<AddDog />}/>
          <Route path="cats/edit/:id" element={<EditPet />}/>
          <Route path="dogs/edit/:id" element={<EditPet />}/>
          <Route path="cats/delete/:id" element={<DeletePet />}/>
          <Route path="dogs/delete/:id" element={<DeletePet />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

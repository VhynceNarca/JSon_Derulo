import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import Home from './pages/Index';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route  path='/dogs' element={<Dogs/>}/>
        <Route path='/cats' element={<Cats/>} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import TvShow from './pages/TvShow';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShow />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

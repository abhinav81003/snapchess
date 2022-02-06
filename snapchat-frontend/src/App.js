import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Layout from './Layout.js';
import Home from './Home';
import About from './About';
import Team from './Team';
=======
import firebase from './util/firebase';
>>>>>>> c3c7795b8f3183af0cca1a48c06cf478f1d58377
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="team" element={<Team/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

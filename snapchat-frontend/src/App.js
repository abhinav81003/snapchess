import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="team" element={<Team/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

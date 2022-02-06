import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar-left">
            <Link to="/">Snapchess</Link>
        </div>
        <div className="navbar-right"> 
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
            <button></button>
        </div>
    </div>
  );
}

export default Navbar;

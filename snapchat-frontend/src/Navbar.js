import logo from './logo.svg';
import './App.css';
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar-left">
            <Link to="/" class="link">snapchess</Link>
        </div>
        <div className="navbar-right"> 
            <Link to="/about" class="link about">about</Link>
            <Link to="/team" class="link team">team</Link>
            <button class="button">try now!</button>
        </div>
    </div>
  );
}

export default Navbar;

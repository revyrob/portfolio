import './NavBar.scss';
import { Link } from "react-router-dom";
import home from '../../assets/icons/home-icon.svg';

function NavBar() {
    return (
      <section className="nav">
        <ul className="nav__list">
          <Link to="/">
            <li>Home</li>
            
          </Link>
          <Link to="/about">
          <li>About</li>
          </Link>
          <Link to="/projects">
            <img src={home} alt="game button" className="nav__img" />
          </Link>
          <Link to="/hackathonsProjects">
            <img src={home} alt="recycling button" className="nav__img" />
          </Link>
          <Link to="/resume">
            <img src={home} alt="recycling button" className="nav__img" />
          </Link>
        </ul>
      </section>
    );
  }
  export default NavBar;
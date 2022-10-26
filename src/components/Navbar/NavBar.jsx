import './NavBar.scss';
import { Link } from "react-router-dom";
import home from '../../assets/icons/home-icon.svg';


function NavBar() {
    return (
      <section className="nav">
        <div className="phantomStyle" />
        <div className="nav__style">
          <Link to="/">
            <img src={home} alt="home button" className="nav__img" />
          </Link>
          <Link to="/about">
            <img src={home} alt="education button" className="nav__img" />
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
        </div>
      </section>
    );
  }
  export default NavBar;
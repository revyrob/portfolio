import Banner from "../components/Banner/Banner";
import NavBar from "../components/Navbar/NavBar";
import '../App.scss';

function LandingPage() {
  return (
    <section className="landing">
      <NavBar />
      <Banner />
    </section>
  );
}

export default LandingPage;

import Banner from "../components/Banner/Banner";
import NavBar from "../components/Navbar/NavBar";
import '../App.scss';
import BottomNav from "../components/BottomNav/BottomNav";

function LandingPage() {
  return (
    <section className="landing">
      
      <Banner />
      <BottomNav />
    </section>
  );
}

export default LandingPage;

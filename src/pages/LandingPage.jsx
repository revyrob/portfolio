import Banner from "../components/Banner/Banner";
import Nav from '../components/Nav/Nav';
import '../App.scss';

function LandingPage() {
  return (
    <section className="landing">
      <Nav />
      <Banner />
    </section>
  );
}

export default LandingPage;

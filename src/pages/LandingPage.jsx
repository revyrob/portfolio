import Banner from "../components/Banner/Banner";
import '../App.scss';
import BottomNav from "../components/BottomNav/BottomNav";

function LandingPage() {
  //make a function where if the page is resized the page is reloaded
  window.addEventListener('resize', function () { 
    window.location.reload(); 
});
  return (
    <section className="landing">
      
      <Banner />
      <BottomNav />
    </section>
  );
}

export default LandingPage;

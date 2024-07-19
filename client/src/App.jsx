import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Footer from "./components/Footer";
import NavbarMobile from "./components/NavbarMobile";
import NavbarDesktop from "./components/NavbarDesktop";
import clip from "./assets/clip2.mp4";
import Poster from "./assets/Poster.jpg";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 699px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 700px)" });
  return (
    <div className="root">
      {isTabletOrMobile && <NavbarMobile />}
      {isDesktopOrLaptop && <NavbarDesktop />}
      <main>
        <Outlet />
      </main>
      <Footer />

      <video autoPlay loop muted poster={Poster} className="background-video">
        <source src={clip} type="video/mp4" />
        <source src={clip} type="video/ogg" />
      </video>
    </div>
  );
}
export default App;

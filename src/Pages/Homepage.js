import "../assets/css/bootstrap-icons.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/slick.css";
import "../assets/css/tooplate-little-fashion.css";
import AboutSecPad from "../components/about-section-padding";
import ContainerFooter from "../components/container-footer";
import Container from "../components/container-nav-bar";
import FeaturedProduct from "../components/featured-product";
import FrontProduct from "../components/front-product";
import SlickSlideShow from "../components/slick-slideshow";

export default function Homepage(){
    return (
        <div>
  <section className="preloader">
    <div className="spinner">
      <span className="sk-inner-circle" />
    </div>
  </section>
  <main>
    <nav className="navbar navbar-expand-lg">
      <Container/>
    </nav>
    <SlickSlideShow/>
    <AboutSecPad/>
    <FrontProduct/>
    <FeaturedProduct/>
  </main>
  <footer className="site-footer">
    <ContainerFooter/>
  </footer>
</div>

    )
}
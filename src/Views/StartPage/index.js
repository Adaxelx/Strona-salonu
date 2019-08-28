import React from "react";
import Home from "Views/StartPage/Home";
import Offer from "Views/StartPage/Offer";
import Footer from "Components/Footer";
import "Root/MainStyle.sass";
import Partnership from "Views/StartPage/Partnership";
import Contact from "Views/StartPage/Contact";

class StartPage extends React.Component {
  state = {};
  container = React.createRef();

  handleScroll = () => {
    const scrollV = window.scrollY;
    const { container } = this;
    if (window.innerWidth >= 1280) {
      const containerOff = container.current.offsetTop;
      const containerH = container.current.offsetHeight;
      const value = containerH + containerOff;
      if (
        containerOff - 60 < scrollV &&
        containerOff + 2190 - containerH > scrollV
      ) {
        container.current.style.transform = `translateY(${scrollV -
          window.innerHeight +
          50}px)`;
      }
    }
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    setTimeout(this.scrollTop, 500);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <article className="startPage">
        <Home />
        <Offer />
        <section className="container" ref={this.container}>
          <Contact />
          <Partnership />
        </section>
        <Footer />
      </article>
    );
  }
}

export default StartPage;

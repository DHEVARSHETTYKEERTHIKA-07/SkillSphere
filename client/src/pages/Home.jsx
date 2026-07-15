import "../styles/Home.css";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Stats from "../components/Stats";
import FeaturedFreelancers from "../components/FeaturedFreelancers";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <Stats />
      <FeaturedFreelancers />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default Home;
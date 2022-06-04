import NavBar from "../components/NavBar";
import HeroImage from "../components/HeroImage";
import PricingCards from "../components/PricingCards";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <div>
      <NavBar />
      <HeroImage heading="PRICING" text="Choose your trip." />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Pricing;

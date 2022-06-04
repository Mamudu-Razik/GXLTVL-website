import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import NavBar from "../components/NavBar";
import TrainingSection from "../components/TrainingSection";

const Training = () => {
  return (
    <div>
      <NavBar />
      <HeroImage heading="TRAINING." text="Pre-Flight & In-Flight Training." />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Training;

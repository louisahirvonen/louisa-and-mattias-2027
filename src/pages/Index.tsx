import { useState, useCallback } from "react";
import EnvelopeAnimation from "@/components/EnvelopeAnimation";
import WeddingNav from "@/components/WeddingNav";
import HeroSection from "@/components/HeroSection";
import OurStory from "@/components/OurStory";
import Schedule from "@/components/Schedule";
import TravelAccommodations from "@/components/TravelAccommodations";
import FAQ from "@/components/FAQ";
import Photobook from "@/components/Photobook";
import GiftsSpeeches from "@/components/GiftsSpeeches";
import RSVPForm from "@/components/RSVPForm";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  const [animationDone, setAnimationDone] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setAnimationDone(true);
  }, []);

  return (
    <>
      {!animationDone && <EnvelopeAnimation onComplete={handleAnimationComplete} />}

      {animationDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <WeddingNav />
          <HeroSection />
          <OurStory />
          <Schedule />
          <TravelAccommodations />
          <FAQ />
          <Photobook />
          <GiftsSpeeches />
          <RSVPForm />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Index;

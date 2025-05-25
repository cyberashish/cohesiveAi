import FeaturesSection from "@/components/home/FeaturesSection"
import HeroSection from "@/components/home/HeroSection"
import PricingSection from "@/components/home/PricingSection"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  AOS.init();
  return (
    <>
      <HeroSection/>
      <FeaturesSection/>
      <PricingSection/>
    </>
  )
}

export default Home

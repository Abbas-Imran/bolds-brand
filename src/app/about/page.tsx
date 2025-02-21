import AboutCEO from "../components/modules/About/about";
import WhyChooseUs from "../components/modules/About/choose-us";
import Hero from "../components/modules/About/hero";
import WidgetBottom from "../components/modules/Contact/widget-bottom";

export default function About() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <AboutCEO />
    </div>
  );
}

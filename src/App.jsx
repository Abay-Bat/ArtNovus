import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const MainLayout = () => (
  <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <Header />
    <Hero />
    <Benefits />
    <Collaboration />
    <Pricing />
    <Team />
    <Footer />
  </div>
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ButtonGradient />
    </>
  );
};

export default App;

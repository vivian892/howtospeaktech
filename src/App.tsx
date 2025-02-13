import Header from "./pages/homepage/Header";
import Navbar from "./pages/homepage/Navbar";
import "./app.css";
import AboutUs from "./pages/homepage/AboutUs";
import Feature from "./components/feature/Feature";
import HowItWorks from "./components/how-it-works/HowItWorks";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <AboutUs />
      <Feature />
      <HowItWorks />
    </div>
  );
};

export default App;

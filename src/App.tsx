import HomePage from "./pages/homepage/HomePage";
import Header from "./pages/homepage/Header";
import Navbar from "./pages/homepage/Navbar";
import "./app.css";
import AboutUs from "./pages/homepage/AboutUs";
import Feature from "./components/feature/Feature";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <AboutUs />
      <Feature />
      <HomePage />
    </div>
  );
};

export default App;

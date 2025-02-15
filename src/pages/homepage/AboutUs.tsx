import { useState } from "react";
import About from "../../components/about/About";
// import AboutUsTop from "../../components/about/AboutUsTop";
import AboutUsButtom from "../../components/about/AboutUsButtom";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("About us");

  const renderContent = () => {
    switch (activeTab) {
      case "About us":
        return <About />;
      case "Journey":
        return <AboutUsButtom />;
      case "Vision":
        return <AboutUsButtom />;
      case "Mission":
        return <AboutUsButtom />;

      default:
        return <About />;
    }
  };

  return (
    <section className="flex flex-col items-center w-full">
      {/* Tabs Navigation */}
      <ul className="flex justify-start gap-6 px-6 py-4 w-full max-w-6xl">
        {["About us", "Journey", "Vision", "Mission"].map((tab) => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-4 py-2 font-semibold transition rounded-md shadow-md ${
              activeTab === tab
                ? "bg-[#30BFAB] text-white"
                : "bg-white text-gray-600 hover:text-[#30BFAB]"
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>

      {/* Component Display */}
      <div className="mt-6 w-full max-w-6xl">{renderContent()}</div>
    </section>
  );
};

export default AboutUs;

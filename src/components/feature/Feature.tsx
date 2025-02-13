import { useState } from "react";
import About from "../about/About";
import AboutUsButtom from "../about/AboutUsButtom";

const Feature = () => {
  const [activeTab, setActiveTab] = useState("Schools");

  const renderContent = () => {
    switch (activeTab) {
      case "Schools":
        return <About />;
      case "Teachers":
        return <AboutUsButtom />;
      case "Parentss":
        return <AboutUsButtom />;
      default:
        return <About />;
    }
  };
  return (
    <section>
      <div className="text-black text-center">
        <h2>Feature</h2>
        <p>
          Tools for Schools, Teachers, and Parents—All in One Place. Designed to
          Make Education Smarter, Smoother, and More Connected
        </p>
      </div>
      <section className="flex flex-col items-center w-full">
        {/* Tabs Navigation */}
        <ul className="flex justify-center gap-6 px-6 py-4 w-full max-w-6xl">
          {["Schools", "Teachers", "Parentss"].map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-4 py-2 font-semibold transition rounded-md shadow-md ${
                activeTab === tab
                  ? "bg-[#30BFAB] text-white"
                  : "bg-white text-gray-600 hover:text-[#30BFAB]"
              }`}
            >
              For {tab}
            </li>
          ))}
        </ul>

        {/* Component Display */}
        {/* <div className="mt-6 w-full max-w-6xl">{renderContent()}</div> */}
      </section>
    </section>
  );
};

export default Feature;

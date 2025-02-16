import { useState } from "react";
import Schools from "./Schools";
import Teachers from "./Teachers";
import Parents from "./Parents";

const Feature = () => {
  const [activeTab, setActiveTab] = useState("Schools");

  const renderContent = () => {
    switch (activeTab) {
      case "Schools":
        return <Schools />;
      case "Teachers":
        return <Teachers />;
      case "Parents":
        return <Parents />;
      default:
        return <Schools />;
    }
  };
  return (
    <section>
      <div className="text-black text-center">
        <h2 className="text-4xl font-bold mb-6">Feature</h2>
        <p className="text-xl leading-relaxed w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
          Tools for Schools, Teachers, and Parents—All in One Place. Designed to
          Make Education Smarter, Smoother, and More Connected.
        </p>
      </div>

      <section className="flex flex-col items-center w-full">
        {/* Tabs Navigation */}
        <ul className="flex justify-center gap-6 px-6 py-2 w-full max-w-6xl">
          {["Schools", "Teachers", "Parents"].map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-4 py-2 font-semibold transition rounded-md shadow-md text-center ${
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
        <div className=" w-full max-w-6xl">{renderContent()}</div>
      </section>
    </section>
  );
};

export default Feature;
